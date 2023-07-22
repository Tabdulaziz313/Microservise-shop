import { IsNotEmpty, IsString } from "class-validator";
import { daletdSectionInterface } from "../interfaces";


export class daletedSectonDto implements daletdSectionInterface{
    @IsString()
    @IsNotEmpty()
    id: string;
}