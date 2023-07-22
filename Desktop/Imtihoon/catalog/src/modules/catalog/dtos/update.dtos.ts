import { IsNotEmpty, IsString } from "class-validator";
import { CatalogUpdate } from "../interface";


export class UpdateCatalogDto implements CatalogUpdate{
    
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    name: string;

    @IsString()
    title: string;
}