import { IsNotEmpty, IsString } from "class-validator";
import { updateSectionInterface } from "../interfaces";


export class UpdateSectionDto implements updateSectionInterface{

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    name: string;

    @IsString()
    title: string;


    @IsString()
    catalogId: string;
}