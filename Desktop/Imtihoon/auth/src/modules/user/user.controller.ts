import { Controller } from '@nestjs/common';
import { userService } from './user.servise';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Command } from './enums';
import { SignInDto, SignUpDto } from './dtos';
import { SignInResponse, SignUpResponse } from './interface';

@Controller()
export class userController {
  readonly #_service: userService;

  constructor(service: userService) {
    this.#_service = service;
  }

  // sign In
  // 

  @MessagePattern(Command.AUTH_SIGN_IN)
  signIn(@Payload() payload: SignInDto): Promise<SignInResponse> {
    return this.#_service.signIn(payload);
  }

  // Sign Up
  // 
  @MessagePattern(Command.AUTH_SIGN_UP)
  signUp(@Payload() payload: SignUpDto): Promise<SignUpResponse>  {
    return this.#_service.signUp(payload);
  }
}
