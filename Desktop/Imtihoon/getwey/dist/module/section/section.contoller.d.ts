import { sectionServices } from "@clients";
import { OneSectionDto } from "./dtos/one.dto";
import { DaletedSectionDto } from "./dtos/daleted.dto";
import { CreatedSectionDto } from "./dtos/created.dto";
export declare class sectionController {
    #private;
    constructor(service: sectionServices);
    sectionRetriveAll(query: any): Promise<any>;
    sectionRetriveOne(param: OneSectionDto): Promise<import("../../clients/product/interfaces").allProductInterface>;
    sectionCreated(body: CreatedSectionDto): Promise<null>;
    sectonUpdate(body: CreatedSectionDto, param: OneSectionDto): Promise<null>;
    sectionDeleted(param: DaletedSectionDto): Promise<void>;
}
