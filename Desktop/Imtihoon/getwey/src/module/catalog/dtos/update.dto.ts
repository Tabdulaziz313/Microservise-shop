import { ApiProperty } from "@nestjs/swagger";
import { updateCatalogInterface } from "clients/catalog/interface/update.interface";


export class UpdateCatalogDto implements updateCatalogInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;

    @ApiProperty({
        example: 'Maxsulot'
    })
    name: string;


    @ApiProperty({
        example: 'Maxsulot'
    })
    title: string;
}