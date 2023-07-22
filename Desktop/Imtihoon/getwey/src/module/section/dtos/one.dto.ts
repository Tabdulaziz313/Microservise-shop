import { ApiProperty } from "@nestjs/swagger";
import { oneSectionInterface } from "clients/section/interfaces/one.interface";



export class OneSectionDto implements oneSectionInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
}