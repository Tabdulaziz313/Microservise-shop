import { registerAs } from "@nestjs/config"

declare interface CatalogServiceOptions {
    host: string
    port: number
    timeout: number
}

export const catalogConfig = registerAs<CatalogServiceOptions>('catalog', (): CatalogServiceOptions => ({
    host: process.env.CATALOG_SERVICE_HOST ?? '0.0.0.0',
    port: process.env.CATALOG_SERVICE_PORT ? parseInt(process.env.EMPLOYEE_SERVICE_PORT, 10): 3001,
    timeout: process.env. CATALOG_SERVICE_TIMEOUT ? parseInt(process.env.EMPLOYEE_SERVICE_TIMEOUT, 10): 5000,
}))
