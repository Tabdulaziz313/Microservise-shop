declare interface CatalogServiceOptions {
    host: string;
    port: number;
    timeout: number;
}
export declare const catalogConfig: import("@nestjs/config").ConfigFactory<CatalogServiceOptions> & import("@nestjs/config").ConfigFactoryKeyHost<CatalogServiceOptions | Promise<CatalogServiceOptions>>;
export {};
