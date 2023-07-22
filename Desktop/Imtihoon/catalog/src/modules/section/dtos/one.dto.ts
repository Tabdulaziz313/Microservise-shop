import { IsNotEmpty, IsString } from "class-validator";
import { oneSectionInterface } from "../interfaces";



export class OneSectonDto implements oneSectionInterface{
    @IsString()
    @IsNotEmpty()
    id: string;
}