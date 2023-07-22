import { Global, Module } from "@nestjs/common";
import { sectionServices } from "./section.service";


@Global()
@Module({
    providers: [sectionServices]
})
export class SectionModule{}