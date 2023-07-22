import { IsNotEmpty, IsString } from "class-validator";
import { CatalogCreatedRequest } from "../interface";

export class CatalogCretedDto implements  CatalogCreatedRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    title: string;
}