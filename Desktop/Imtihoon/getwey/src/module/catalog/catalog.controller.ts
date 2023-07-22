import {   CatalogRetrieveAllRequest,  CatalogService } from "@clients";
import { Body, Controller, Get, HttpCode, HttpStatus, Injectable, Query, UseInterceptors , Post, Put, Param, Delete} from "@nestjs/common";
import { ApiBadRequestResponse, ApiHeader, ApiHeaders, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CreatedCatalogDto, DaletedCatalogDto, OneCatalogDto } from "./dtos";


// @UseInterceptors()
@ApiTags('Cantoller')
// @ApiHeaders([
//     {
//         name: 'Authorization',
//         example: 'Bearer token...',
//         required: true
//     }
// ])
@Controller({
    path: 'catalog',
    version: '1'
})
export class CatalogController {

    readonly #_service: CatalogService

    constructor( service: CatalogService) {
        this.#_service  = service
    }

    // Get All
    @HttpCode(HttpStatus.OK)
    @Get()
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async catalogRetriveAll(@Query() query: CatalogRetrieveAllRequest) {
        return this.#_service.catalogRetrieveAll(query)
    }

    // Get One
    @HttpCode(HttpStatus.OK)
    @Get('/:id')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async catalogOne(@Param() param: OneCatalogDto){
        return this.#_service.catalogOne(param)
    }


    // Created
    @HttpCode(HttpStatus.CREATED)
    @Post('created')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async catalogCreated(@Body() body : CreatedCatalogDto): Promise<null> {
        return this.#_service.ctalogCreated(body)
    }


    // Update
    @HttpCode(HttpStatus.OK)
    @Put('update/:id')
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async catalogUpdate(
        @Body() body: CreatedCatalogDto,
        @Param() param: OneCatalogDto
    ): Promise<null>{
        return this.#_service.catalogUpdate({...param, ...body})
    }


    // Daleted
    @HttpCode(HttpStatus.OK)
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    @Delete('daleted/:id')
    async catalogDaleted(
        @Param() param: DaletedCatalogDto
    ){
        return this.#_service.catalogDaleted(param)
    }

}