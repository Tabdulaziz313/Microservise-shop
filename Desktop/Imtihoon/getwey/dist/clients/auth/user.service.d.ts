import { ConfigService } from "@nestjs/config";
import type { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from "./interfaces";
export declare class UserService {
    #private;
    constructor(config: ConfigService);
    signUp(payload: SignUpRequest): Promise<SignUpResponse>;
    signIn(payload: SignInRequest): Promise<SignInResponse>;
}
