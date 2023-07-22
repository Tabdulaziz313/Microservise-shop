import { CatalogService, sectionServices } from "@clients";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, Param, Post, Put, Query } from "@nestjs/common";
import { Payload } from "@nestjs/microservices";
import {  ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { OneSectionDto } from "./dtos/one.dto";
import { DaletedSectionDto } from "./dtos/daleted.dto";
import { CreatedSectionDto } from "./dtos/created.dto";



@ApiTags('Section')
@Controller({
    path: '/catalog/section/',
    version: '1'
})
export class sectionController{
    readonly #_service: sectionServices

    constructor( service:sectionServices ) {
        this.#_service  = service
    }


    // Get All
    @HttpCode(HttpStatus.OK)
    @Get('')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async sectionRetriveAll(@Query() query: any) {
        return this.#_service.sectionReetriveAll(query)
    }

    // Get One
    @Get('/:id')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async sectionRetriveOne(@Param() param: OneSectionDto){
        return this.#_service.sectionRetriveOne(param)
    }



    // Created
    @Post('/created')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async sectionCreated(@Body() body: CreatedSectionDto){
        return this.#_service.sectionCreated(body)
    }

    // Updatee
    @Put('update/:id')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async sectonUpdate(
        @Body() body:CreatedSectionDto ,
        @Param() param: OneSectionDto
    ){
        return this.#_service.sectionUpdate({...param, ...body})

    }

    // Daleted
    @Delete('deleted/:id')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async sectionDeleted(
        @Param() param: DaletedSectionDto
    ){
        return this.#_service.sectionDaleted(param)
    }

}