import { sectionService } from "./section.service";
import { CreatedSectionDto, UpdateSectionDto, daletedSectonDto } from "./dtos";
export declare class sectionController {
    #private;
    constructor(prisma: sectionService);
    sectionRetriveAll(): Promise<any>;
    sectionOne(payload: any): Promise<import("./interfaces").oneSectionInterface>;
    createdSection(payload: CreatedSectionDto): Promise<any>;
    updateSection(payload: UpdateSectionDto): Promise<void>;
    daletedSection(payload: daletedSectonDto): Promise<null>;
}
