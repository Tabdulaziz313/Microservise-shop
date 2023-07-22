declare interface UserServiceOptions {
    host: string;
    port: number;
    timeout: number;
}
export declare const userConfig: import("@nestjs/config").ConfigFactory<UserServiceOptions> & import("@nestjs/config").ConfigFactoryKeyHost<UserServiceOptions | Promise<UserServiceOptions>>;
export {};
