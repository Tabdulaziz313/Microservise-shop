import { Module } from "@nestjs/common";
import { PrismaService } from "prisma";



@Module({
    imports: [],
    providers: [PrismaService],
    controllers: [],
})

export class ProductModule {}