import { IsNotEmpty, IsString } from "class-validator";
import { createdSectionInterface } from "../interfaces";


export class CreatedSectionDto implements createdSectionInterface{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    title: string;


    @IsString()
    @IsNotEmpty()
    catalogId: string;
    
}