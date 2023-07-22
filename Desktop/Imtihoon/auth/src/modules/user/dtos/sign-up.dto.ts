import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';
import type { SignUpRequest } from '../interface';

export class SignUpDto implements SignUpRequest {
  @MaxLength(200)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
