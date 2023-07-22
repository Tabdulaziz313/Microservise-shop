import { ApiProperty } from "@nestjs/swagger";
import { daletedProductInterface } from "clients/product/interfaces";


export class DaletedProductDto implements daletedProductInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
    
}