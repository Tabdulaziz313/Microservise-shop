import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientTCP } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { sectionEnums } from "./enums/section.enums";
import { CatalogRetrieveAllRequest } from "clients/catalog";
import { createdSectionInterface } from "./interfaces/created.interface";
import { updateSectionInterface } from "./interfaces/update.interface";
import { daletdSectionInterface } from "./interfaces/daleted.interface";
import { allProductInterface, oneProductInterface } from "clients/product/interfaces";




@Injectable()
export class sectionServices{

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
    async sectionReetriveAll(payload: CatalogRetrieveAllRequest): Promise<any>{
        return this.#_send< any,CatalogRetrieveAllRequest >(sectionEnums.SECTION_ALL,  payload)
    }

    // Get One
    async sectionRetriveOne(payload: oneProductInterface): Promise<allProductInterface>{
        return this.#_send< allProductInterface, oneProductInterface>(sectionEnums.SECTION_ONE, payload)
    }

    // Created
    async sectionCreated(payload: createdSectionInterface): Promise<null>{
        return this.#_send< null, createdSectionInterface>(sectionEnums.SECTION_CREATED, payload)
    }


    // Update
    async sectionUpdate(payload: updateSectionInterface): Promise<null>{
        return this.#_send< null, updateSectionInterface>(sectionEnums.SECTION_CREATED, payload)
    }
    // Deleted
    async sectionDaleted(payload: daletdSectionInterface): Promise<void>{
        return this.#_send< null, daletdSectionInterface>(sectionEnums.SECTION_CREATED, payload)
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