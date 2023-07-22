import { PrismaService } from "../../prisma/prisma.service";
import { CatalogCreatedRequest, CatalogDaleted, CatalogUpdate, OneCatalogInterface } from "./interface";
export declare class CatalogService {
    #private;
    constructor(prisme: PrismaService);
    catalogRetriveAll(): Promise<any>;
    oneCatalog(payload: OneCatalogInterface): Promise<any>;
    createdCatalog(payload: CatalogCreatedRequest): Promise<null>;
    updateCatalog(payload: CatalogUpdate): Promise<null>;
    daletedCatalog(payload: CatalogDaleted): Promise<null>;
}
