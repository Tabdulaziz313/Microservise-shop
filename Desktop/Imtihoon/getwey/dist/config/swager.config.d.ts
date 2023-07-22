import type { OpenAPIObject } from "@nestjs/swagger";
export declare interface SwaggerOptions {
    path?: string;
    options?: Omit<OpenAPIObject, 'paths'>;
}
export declare const swaggerConfig: SwaggerOptions;
