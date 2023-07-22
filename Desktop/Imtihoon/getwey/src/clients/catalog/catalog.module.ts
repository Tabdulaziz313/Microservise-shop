import { Module ,Global } from "@nestjs/common";
import { CatalogService } from "./catalog.service";


@Global()
@Module({
    exports: [CatalogService],
    providers: [CatalogService]
})

export class CatalogModule {}