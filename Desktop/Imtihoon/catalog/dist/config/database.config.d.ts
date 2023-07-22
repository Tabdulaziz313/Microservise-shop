declare interface DatabaseConfigOptions {
    url?: string;
}
export declare const dbConfig: import("@nestjs/config").ConfigFactory<DatabaseConfigOptions> & import("@nestjs/config").ConfigFactoryKeyHost<DatabaseConfigOptions | Promise<DatabaseConfigOptions>>;
export {};
