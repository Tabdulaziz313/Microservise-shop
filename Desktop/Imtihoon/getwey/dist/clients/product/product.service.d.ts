import { ConfigService } from "@nestjs/config";
import { allProductInterface, createdProductInterface, daletedProductInterface, oneProductInterface, updateProductInterface } from "./interfaces";
export declare class productService {
    #private;
    constructor(config: ConfigService);
    productReetriveAll(): Promise<allProductInterface>;
    productRetriveOne(payload: oneProductInterface): Promise<allProductInterface>;
    productCreated(payload: createdProductInterface): Promise<void>;
    productUpdate(payload: updateProductInterface): Promise<void>;
    productDaleted(payload: daletedProductInterface): Promise<void>;
}
