import type { SignUpRequest, SignUpResponse } from "@clients";
export declare class SignUpDto implements SignUpRequest {
    username: string;
    password: string;
}
export declare class SignUpResponseDto implements SignUpResponse {
    accessToken: string;
    refreshToken: string;
}
