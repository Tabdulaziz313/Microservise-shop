import type { SignInRequest, SignInResponse } from "@clients";
export declare class SignInDto implements SignInRequest {
    username: string;
    password: string;
}
export declare class SignInResponseDto implements SignInResponse {
    accessToken: string;
    refreshToken: string;
}
