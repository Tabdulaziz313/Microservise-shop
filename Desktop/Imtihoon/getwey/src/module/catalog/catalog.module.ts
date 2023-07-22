import { CatalogModule } from "@clients";
import { Module } from "@nestjs/common";
import { CatalogController } from "./catalog.controller";


@Module({
    imports: [CatalogModule],
    controllers:[CatalogController]
})
export class CatalogGetweyModule {}