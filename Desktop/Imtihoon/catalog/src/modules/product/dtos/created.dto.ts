import { createdProductInterface } from "../interfaces";

export class CreatedProductDto implements createdProductInterface{
    name: string;
    title: string;
    price: string;
    sectionId: string;

}