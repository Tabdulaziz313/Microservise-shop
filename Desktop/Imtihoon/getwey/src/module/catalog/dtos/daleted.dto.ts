import { ApiProperty } from "@nestjs/swagger";
import { daletedCatalogInterface } from "clients/catalog/interface/daleted.interface";

export class DaletedCatalogDto implements daletedCatalogInterface {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id: string;
}