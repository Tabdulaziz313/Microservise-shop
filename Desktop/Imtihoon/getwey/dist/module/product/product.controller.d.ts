import { CreatedProductDto } from "./dtos/created.dto";
import { productService } from "@clients";
import { OneProductDto } from "./dtos/one.dto";
import { DaletedProductDto } from "./dtos/daleted.dto";
export declare class productController {
    #private;
    constructor(service: productService);
    productRetriveAll(): Promise<import("../../clients/product/interfaces").allProductInterface>;
    productRetriveOne(param: OneProductDto): Promise<import("../../clients/product/interfaces").allProductInterface>;
    productCreated(body: CreatedProductDto): Promise<void>;
    productUpdate(param: OneProductDto, body: CreatedProductDto): Promise<void>;
    productDeleted(param: DaletedProductDto): Promise<void>;
}
