import { productService } from "./product.service";
import { CreatedProductDto, DaletedProductDto, OneProductDto, UpdateProductDto } from "./dtos";
export declare class productController {
    #private;
    constructor(prisma: productService);
    productAll(): Promise<any>;
    productOne(payload: OneProductDto): Promise<any>;
    productCreated(payload: CreatedProductDto): Promise<null>;
    productUpdate(payload: UpdateProductDto): Promise<null>;
    productDaleted(payload: DaletedProductDto): Promise<null>;
}
