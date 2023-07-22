import { Transport } from '@nestjs/microservices';
declare interface AppConfig {
    transport: Transport;
    options: {
        host: string;
        port: number;
    };
}
export declare const appConfig: AppConfig;
export {};
