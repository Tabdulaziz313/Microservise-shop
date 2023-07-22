import { Module } from "@nestjs/common";
import { sectionController } from "./section.contoller";
import { SectionModule, sectionServices } from "@clients";

@Module({
    providers: [sectionServices],
    controllers: [sectionController],
})
export class SectionModuleGetwey {}