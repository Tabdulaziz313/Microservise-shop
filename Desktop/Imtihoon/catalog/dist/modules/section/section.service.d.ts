import type { createdSectionInterface, daletdSectionInterface, oneSectionInterface, updateSectionInterface } from "./interfaces";
import { PrismaService } from "prisma/prisma.service";
export declare class sectionService {
    #private;
    constructor(prisme: PrismaService);
    AllSection(): Promise<any>;
    OneSection(payload: any): Promise<oneSectionInterface>;
    CreatedSection(payload: createdSectionInterface): Promise<any>;
    UpdateSection(payload: updateSectionInterface): Promise<void>;
    DaletedSection(payload: daletdSectionInterface): Promise<null>;
}
