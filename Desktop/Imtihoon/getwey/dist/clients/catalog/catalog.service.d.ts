import { ConfigService } from "@nestjs/config";
import type { CatalogRetrieveAllRequest, createdCatalogInterface, daletedCatalogInterface, oneCatalogInterface, updateCatalogInterface } from "./interface";
export declare class CatalogService {
    #private;
    constructor(config: ConfigService);
    catalogRetrieveAll(payload: CatalogRetrieveAllRequest): Promise<any>;
    catalogOne(payload: oneCatalogInterface): Promise<null>;
    ctalogCreated(payload: createdCatalogInterface): Promise<null>;
    catalogUpdate(payload: updateCatalogInterface): Promise<any>;
    catalogDaleted(payload: daletedCatalogInterface): Promise<null>;
    any: any;
}
