import { CatalogRetrieveAllRequest, CatalogService } from "@clients";
import { CreatedCatalogDto, DaletedCatalogDto, OneCatalogDto } from "./dtos";
export declare class CatalogController {
    #private;
    constructor(service: CatalogService);
    catalogRetriveAll(query: CatalogRetrieveAllRequest): Promise<any>;
    catalogOne(param: OneCatalogDto): Promise<null>;
    catalogCreated(body: CreatedCatalogDto): Promise<null>;
    catalogUpdate(body: CreatedCatalogDto, param: OneCatalogDto): Promise<null>;
    catalogDaleted(param: DaletedCatalogDto): Promise<null>;
}
