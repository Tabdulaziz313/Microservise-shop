import { ApiProperty } from "@nestjs/swagger";
import { oneCatalogInterface } from "clients/catalog/interface/one.interface";


export class OneCatalogDto implements oneCatalogInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
}