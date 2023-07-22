import { ApiProperty } from "@nestjs/swagger";
import { createdProductInterface } from "clients/product/interfaces";


export class CreatedProductDto implements createdProductInterface{
    @ApiProperty({
        example: 'Maxsulotlar'
    })
    name: string;
    @ApiProperty({
        example: 'Maxsulotlar'
    })
    title: string;
    @ApiProperty({
        example: 'Maxsulotlar'
    })
    price: string;
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    sectionId: string;
    
}