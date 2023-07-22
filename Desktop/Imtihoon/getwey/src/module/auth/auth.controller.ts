import { SignInRequest, SignUpRequest, UserService } from "@clients";
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { SignInDto, SignInResponseDto, SignUpDto, SignUpResponseDto } from "./dtos";


@ApiTags('Auth')
@Controller({
    path: 'auth'
})
export class authController{

    readonly #_service: UserService

    constructor(service: UserService) {
        this.#_service = service
    }
    

    // Sign-up
    @HttpCode(HttpStatus.OK)
    @Post('sign-up')
    @ApiBody({ type: SignUpDto })
    @ApiOkResponse({ type: SignUpResponseDto })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    signUp(
        @Body() body: SignUpRequest
    ) {
        return this.#_service.signUp(body)
    }


    // Sign-in

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    @ApiBody({ type: SignInDto })
    @ApiOkResponse({ type: SignInResponseDto })
    @ApiUnauthorizedResponse({ description: 'Unauthorized' })
    @ApiBadRequestResponse({ description: 'Bad request'})
    @ApiInternalServerErrorResponse({ description: 'Internal server error' })
    signIn(
        @Body() body: SignInRequest
    ) {
        return this.#_service.signIn(body)
    }


}