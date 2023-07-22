import { ApiProperty } from "@nestjs/swagger";
import { createdSectionInterface } from "clients/section/interfaces/created.interface";


export class CreatedSectionDto implements createdSectionInterface{
    @ApiProperty({
        example: 'Maxsulotlar'
    })
    name: string;

    @ApiProperty({
        example: 'Badiy Adabiyotlar Bolimi'
    })
    title: string;

    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    catalogId: string;
    
}