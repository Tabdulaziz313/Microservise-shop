import { Controller } from "@nestjs/common";
import { productService } from "./product.service";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { productEnums } from "./enums";
import { CreatedProductDto, DaletedProductDto, OneProductDto, UpdateProductDto } from "./dtos";


@Controller()
export class productController {

    readonly #_service: productService

    constructor(prisma: productService) {
        this.#_service = prisma
    }

    // Get All
    @MessagePattern(productEnums.PRODUCT_ALL)
    productAll() {
        return this.#_service.AllProduct()
    }


    // GetOne
    @MessagePattern(productEnums.PRODUCT_ONE)
    productOne(@Payload() payload: OneProductDto) {
        return this.#_service.OneProduct(payload)
    }


    // Created
    @MessagePattern(productEnums.PRODUCT_CREATED)
    productCreated(@Payload() payload: CreatedProductDto) {
        return this.#_service.CreatedProduct(payload)

    }


    // Update
    @MessagePattern(productEnums.PRODUCT_UPDATE)
    productUpdate(@Payload() payload: UpdateProductDto) {
        return this.#_service.UpdateProduct(payload)

    }


    // Daleted
    @MessagePattern(productEnums.PRODUCT_DALETED)
    productDaleted(@Payload() payload: DaletedProductDto) {
        return this.#_service.DaletedProduct(payload)

    }


}