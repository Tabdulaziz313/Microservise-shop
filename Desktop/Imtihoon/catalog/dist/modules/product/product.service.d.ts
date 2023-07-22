import { PrismaService } from "prisma/prisma.service";
import { createdProductInterface, daletedProductInterface, oneProductInterface, updateProductInterface } from "./interfaces";
export declare class productService {
    #private;
    constructor(prisme: PrismaService);
    AllProduct(): Promise<any>;
    OneProduct(payload: oneProductInterface): Promise<any>;
    CreatedProduct(payload: createdProductInterface): Promise<null>;
    UpdateProduct(payload: updateProductInterface): Promise<null>;
    DaletedProduct(payload: daletedProductInterface): Promise<null>;
}
