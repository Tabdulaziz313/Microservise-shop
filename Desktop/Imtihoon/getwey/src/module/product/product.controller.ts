import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBadRequestResponse, ApiHeader, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { CreatedProductDto } from "./dtos/created.dto";
import { productService } from "@clients";
import { OneProductDto } from "./dtos/one.dto";
import { DaletedProductDto } from "./dtos/daleted.dto";


@ApiTags('Product')
@Controller({
    path: 'catalog/section/product/',
    version: '1'
})
export class productController {


    readonly #_sevice: productService

    constructor(service: productService) {
        this.#_sevice = service
    }


    // Get All
    @Get()
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async productRetriveAll() {
        return this.#_sevice.productReetriveAll()
    }

    // Get One
    @Get(':id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async productRetriveOne(@Param() param: OneProductDto) {
        return this.#_sevice.productRetriveOne(param)
    }

    // Creted
    @Post('created')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async productCreated(@Body() body: CreatedProductDto) {
        return this.#_sevice.productCreated(body)

    }


    // Update
    @Put('update/:id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async productUpdate(
        @Param() param: OneProductDto,
        @Body() body: CreatedProductDto
    ) {
        return this.#_sevice.productUpdate({ ...param, ...body })
    }


    
    // Daleted
    @Delete('daleted/:id')
    @ApiBadRequestResponse({ description: 'Bad request' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    async productDeleted(@Param() param: DaletedProductDto) {
        return this.#_sevice.productDaleted(param)
    }

}