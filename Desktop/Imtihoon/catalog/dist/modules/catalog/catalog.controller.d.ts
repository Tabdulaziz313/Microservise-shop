import { CatalogService } from "./catalog.service";
import { CatalogCretedDto, UpdateCatalogDto } from "./dtos";
import { CatalogDeletedDto } from "./dtos/daleted-catalog.dto";
import { OneCatalogInterface } from "./interface";
export declare class CatalogController {
    #private;
    constructor(prisma: CatalogService);
    catalogRetriveAll(): Promise<any>;
    catalogOne(payload: OneCatalogInterface): Promise<any>;
    catalogCreated(payload: CatalogCretedDto): Promise<null>;
    catalogUpdate(payload: UpdateCatalogDto): Promise<null>;
    catalogDaleted(payload: CatalogDeletedDto): Promise<null>;
}
