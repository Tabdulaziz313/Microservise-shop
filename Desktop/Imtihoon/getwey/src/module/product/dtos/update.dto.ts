import { ApiProperty } from "@nestjs/swagger";
import { updateProductInterface } from "clients/product/interfaces";


export class UpdateProductDto  implements updateProductInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
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