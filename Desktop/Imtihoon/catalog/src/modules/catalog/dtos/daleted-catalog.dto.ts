import { IsNotEmpty, IsString } from "class-validator";
import { CatalogDaleted } from "../interface";



export class CatalogDeletedDto implements CatalogDaleted {
    @IsString()
    @IsNotEmpty()
    id: string;
}