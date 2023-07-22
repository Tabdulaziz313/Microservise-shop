import { Module } from "@nestjs/common";
import { PrismaService } from "prisma";
import { sectionService } from "./section.service";
import { sectionController } from "./section.controller";



@Module({
    imports: [],
    providers: [ sectionService, PrismaService],
    controllers: [ sectionController],
})

export class SectionModule {}