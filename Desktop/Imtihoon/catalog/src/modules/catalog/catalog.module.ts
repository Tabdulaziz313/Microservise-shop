import { Module } from "@nestjs/common";
import { CatalogController } from "./catalog.controller";
import { CatalogService } from "./catalog.service";
import {  PrismaService } from "../../prisma/prisma.service";


@Module({
    imports: [],
    providers: [CatalogService, PrismaService],
    controllers: [CatalogController],
})

export class catalogModule {}