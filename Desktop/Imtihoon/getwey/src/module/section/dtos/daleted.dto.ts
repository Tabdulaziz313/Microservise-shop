import { ApiProperty } from "@nestjs/swagger";
import { daletdSectionInterface } from "clients/section/interfaces/daleted.interface";


export class DaletedSectionDto implements daletdSectionInterface{
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
}