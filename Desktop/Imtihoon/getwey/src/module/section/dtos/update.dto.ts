import { ApiProperty } from "@nestjs/swagger";
import { updateSectionInterface } from "clients/section/interfaces/update.interface";


export class UpdatedSectionDto implements updateSectionInterface{
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
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    catalogId: string;
    
}