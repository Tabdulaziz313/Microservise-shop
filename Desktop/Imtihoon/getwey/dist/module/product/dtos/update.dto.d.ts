import { updateProductInterface } from "clients/product/interfaces";
export declare class UpdateProductDto implements updateProductInterface {
    id: string;
    name: string;
    title: string;
    price: string;
    sectionId: string;
}
