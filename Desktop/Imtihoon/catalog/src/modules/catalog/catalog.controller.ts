import { Controller } from "@nestjs/common";
import { CatalogService } from "./catalog.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { Command } from "./enoms";
import { CatalogCretedDto, UpdateCatalogDto } from "./dtos";
import { CatalogDeletedDto } from "./dtos/daleted-catalog.dto";
import { OneCatalogInterface } from "./interface";



@Controller()
export class CatalogController {

    readonly #_service: CatalogService
    constructor( prisma: CatalogService ) {
        this.#_service =prisma
    }

    @MessagePattern(Command.EMPLOYEE_RETRIEVE_ALL)
    catalogRetriveAll(){
        return this.#_service.catalogRetriveAll()
    }

    @MessagePattern(Command.CATALOG_ONE)
    catalogOne(@Payload() payload: OneCatalogInterface){
        return this.#_service.oneCatalog(payload)
    }

    @MessagePattern(Command.CATALOG_CREATED)
    catalogCreated( @Payload() payload:  CatalogCretedDto): Promise<null>{
        return this.#_service.createdCatalog(payload)
    }

    @MessagePattern(Command.CATALOG_UPDATE)
    catalogUpdate(@Payload() payload: UpdateCatalogDto):  Promise<null>{
        return this.#_service.updateCatalog(payload)
    }



    @MessagePattern(Command.CATALOG_DELETED)
    catalogDaleted(@Payload() payload: CatalogDeletedDto) :  Promise<null>{
        console.log(payload)
        return this.#_service.daletedCatalog(payload)
    }






}