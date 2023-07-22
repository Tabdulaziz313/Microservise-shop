import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { ClientTCP } from "@nestjs/microservices"
import { ConfigService } from "@nestjs/config"
import { firstValueFrom, timeout } from "rxjs"
import { Command } from "./enums"
import type {  CatalogRetrieveAllRequest, createdCatalogInterface, daletedCatalogInterface, oneCatalogInterface, updateCatalogInterface,  } from "./interface"
import {  } from "./interface/update.interface"

@Injectable()
export class CatalogService {
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

    async catalogRetrieveAll(payload: CatalogRetrieveAllRequest): Promise<any> {
        return this.#_send<any, CatalogRetrieveAllRequest>(Command.EMPLOYEE_RETRIEVE_ALL, payload)
    }


    // Get One
    async catalogOne(payload: oneCatalogInterface) : Promise<null> {
        return this.#_send<null, oneCatalogInterface>(Command.CATALOG_ONE, payload)
    }


    // Created
    async ctalogCreated( payload: createdCatalogInterface): Promise<null> {
        return this.#_send<null,createdCatalogInterface >(Command.CATALOG_CREATED, payload)
    }


    // Updated
    async catalogUpdate( payload: updateCatalogInterface): Promise<any>{
        return this.#_send<null,updateCatalogInterface >(Command.CATALOG_UPDATE, payload)
    }


    // Daletd
    async catalogDaleted(payload: daletedCatalogInterface): Promise<null>{
        return this.#_send<null, daletedCatalogInterface>(Command.CATALOG_DELETED, payload)
    }



    async #_connect(): Promise<void> {
        await this.#_client.connect()
    }

    #_disConnect(): void {
        this.#_client.close()
    }
    any
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
