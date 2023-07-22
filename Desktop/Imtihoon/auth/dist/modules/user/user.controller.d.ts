import { userService } from './user.servise';
import { SignInDto, SignUpDto } from './dtos';
import { SignInResponse, SignUpResponse } from './interface';
export declare class userController {
    #private;
    constructor(service: userService);
    signIn(payload: SignInDto): Promise<SignInResponse>;
    signUp(payload: SignUpDto): Promise<SignUpResponse>;
}
