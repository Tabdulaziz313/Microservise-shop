import { PrismaService } from 'prisma/prisma.service';
import { SignInRequest, SignUpRequest, SignUpResponse } from './interface';
export declare class userService {
    #private;
    constructor(prisma: PrismaService);
    signIn(payload: SignInRequest): Promise<SignUpResponse>;
    zz: any;
    signUp(payload: SignUpRequest): Promise<SignUpResponse>;
}
