import { updateProductInterface } from "../interfaces";

export class UpdateProductDto implements updateProductInterface{
    id: string;
    name: string;
    title: string;
    price: string;
    sectionId: string;

}