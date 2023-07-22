import { createdCatalogInterface } from "@clients";
import { ApiProperty } from "@nestjs/swagger";


export class CreatedCatalogDto implements createdCatalogInterface{
    @ApiProperty({
        example: 'Maxsulotlar'
    })
    name: string;


    @ApiProperty({
        example: 'Maxsulotlar'
    })
    title: string;



}