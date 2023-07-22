import { Global, Module } from "@nestjs/common";
import { productService } from "./product.service";


@Global()
@Module({
    providers: [productService],
})
export class ProductModule{}