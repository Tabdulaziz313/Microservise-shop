import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { productEnums } from "./enums/product.enum";
import { allProductInterface, createdProductInterface, daletedProductInterface, oneProductInterface, updateProductInterface } from "./interfaces";



@Injectable()
export class productService {
    readonly #_client: ClientTCP
    readonly #_timeout: number
    
    constructor(config: ConfigService) {
        this.#_client = new ClientTCP({
            host: config.getOrThrow<string>('catalog.host'),
            port: config.getOrThrow<number>('catalog.port'),
        })

        this.#_timeout = config.getOrThrow<number>('catalog.timeout')
    }

    // Get All
    async productReetriveAll(): Promise<allProductInterface>{
        return this.#_send< null, allProductInterface>(productEnums.PRODUCT_ALL, null)
    }

    // Get One
    async productRetriveOne(payload: oneProductInterface): Promise<allProductInterface>{
        return this.#_send< allProductInterface, oneProductInterface>(productEnums.PRODUCT_ONE, payload)
    }

    // Created
    async productCreated(payload: createdProductInterface): Promise<void>{
        return this.#_send< null, createdProductInterface>(productEnums.PRODUCT_CREATED, payload)
    }


    // Update
    async productUpdate(payload: updateProductInterface): Promise<void>{
        return this.#_send< any, updateProductInterface>(productEnums.PRODUCT_CREATED, payload)
    }
    // Deleted
    async productDaleted(payload: daletedProductInterface): Promise<void>{
        return this.#_send< any, daletedProductInterface>(productEnums.PRODUCT_CREATED, payload)
    }

    


    async #_connect(): Promise<void> {
        await this.#_client.connect()
    }

    #_disConnect(): void {
        this.#_client.close()
    }

    async #_send<TResponse, TRequest>(pattern: string, payload: TRequest): Promise<TResponse> {
        try {
            return await firstValueFrom(
                this.#_client.send<TResponse, TRequest>(pattern, payload)
                // .pipe(timeout(this.#_timeout))
            )
        } catch(error: unknown) {
            console.log(error)
            throw new InternalServerErrorException(error)
        }
    }

}