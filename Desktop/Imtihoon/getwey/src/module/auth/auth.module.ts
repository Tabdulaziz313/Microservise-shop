import { Module } from "@nestjs/common";
import { authController } from "./auth.controller";
import { UserService } from "@clients";


@Module({
    providers: [UserService],
    controllers:  [authController]
})
export class AuthGetweyModule{}