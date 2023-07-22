import { Controller, Get, Param } from "@nestjs/common";
import { sectionService } from "./section.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { sectionEnums } from "./enums";
import { CreatedSectionDto, UpdateSectionDto, daletedSectonDto } from "./dtos";


@Controller()
export class sectionController {

    readonly #_service:  sectionService
    constructor( prisma: sectionService){
        this.#_service = prisma
    }

    
    // Get
    @MessagePattern(sectionEnums.SECTION_ALL)
    sectionRetriveAll(){
        return this.#_service.AllSection()
    }

    // GetOne
    @MessagePattern(sectionEnums.SECTION_ONE)
    sectionOne(@Payload() payload: any){
        return this.#_service.OneSection(payload)
    }


    // Created
    @MessagePattern(sectionEnums.SECTION_CREATED)
    createdSection(@Payload() payload: CreatedSectionDto){
        return this.#_service.CreatedSection(payload)
    }



    // Update
    @MessagePattern(sectionEnums.SECTION_UPDATE)
    updateSection(@Payload() payload: UpdateSectionDto){
        return this.#_service.UpdateSection(payload)
    }

    
    // Daleted
    @MessagePattern(sectionEnums.SECTION_DALETED)
    daletedSection(@Payload() payload: daletedSectonDto){
        return this.#_service.DaletedSection(payload)
    }


}