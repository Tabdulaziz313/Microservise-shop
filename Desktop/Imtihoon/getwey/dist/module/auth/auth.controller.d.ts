import { SignInRequest, SignUpRequest, UserService } from "@clients";
export declare class authController {
    #private;
    constructor(service: UserService);
    signUp(body: SignUpRequest): Promise<import("@clients").SignUpResponse>;
    signIn(body: SignInRequest): Promise<import("@clients").SignInResponse>;
}
