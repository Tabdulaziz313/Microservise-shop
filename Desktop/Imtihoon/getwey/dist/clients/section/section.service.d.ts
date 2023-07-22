import { ConfigService } from "@nestjs/config";
import { CatalogRetrieveAllRequest } from "clients/catalog";
import { createdSectionInterface } from "./interfaces/created.interface";
import { updateSectionInterface } from "./interfaces/update.interface";
import { daletdSectionInterface } from "./interfaces/daleted.interface";
import { allProductInterface, oneProductInterface } from "clients/product/interfaces";
export declare class sectionServices {
    #private;
    constructor(config: ConfigService);
    sectionReetriveAll(payload: CatalogRetrieveAllRequest): Promise<any>;
    sectionRetriveOne(payload: oneProductInterface): Promise<allProductInterface>;
    sectionCreated(payload: createdSectionInterface): Promise<null>;
    sectionUpdate(payload: updateSectionInterface): Promise<null>;
    sectionDaleted(payload: daletdSectionInterface): Promise<void>;
}
