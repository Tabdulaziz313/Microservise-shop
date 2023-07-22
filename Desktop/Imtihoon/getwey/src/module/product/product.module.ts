import { Module } from "@nestjs/common";
import { productController } from "./product.controller";
import { ProductModule, productService } from "@clients";


@Module({
    providers: [productService],
    controllers: [productController]
})
export class ProductModuleGetwey{}