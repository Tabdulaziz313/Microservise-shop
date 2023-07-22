import type { allSectionInterface, createdSectionInterface, daletdSectionInterface, oneSectionInterface, updateSectionInterface } from "./interfaces";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";


@Injectable()
export class sectionService {
    readonly #_prisma: PrismaService

    constructor(prisme: PrismaService) {
        this.#_prisma = prisme
    }


    // Get All
    async AllSection(): Promise<any> {
        const allSection = await this.#_prisma.section.findMany({
            select: {
                id: true,
                name: true,
                title: true,
                catalogId: true
            }, where: {
                deletedAt: null,
            }
        })
        return allSection;
    }


    // GetOne
    async OneSection(payload: any): Promise<oneSectionInterface> {
        const foundCategory = await this.#_prisma.section.findFirst({
            where: {
                id: payload,
            },
        });

        if (!foundCategory) {
            throw new NotFoundException('Subcategory does not exist!');
        }
        return foundCategory;
    }


    // Created

    async CreatedSection(payload: createdSectionInterface) {
        try {
            await this.#_prisma.section.create({
                data: {
                    name: payload.name,
                    title: payload.title,
                    catalogId: payload.catalogId,
                },
            });
        } catch (error) {
            console.log(error);
            throw new ConflictException('Subcategory already exists!');
        }
        return null;

    }

    // Update

    async UpdateSection(payload: updateSectionInterface): Promise<void> {
        await this.#_checkSubcategory(payload.id);
        await this.#_prisma.section.update({
            data: {
                name: payload.name,
                title: payload.title,
            },
            where: {
                id: payload.id,
            },
        });
        return null;
    }


    // Daleted

    async DaletedSection(payload: daletdSectionInterface): Promise<null> {
        await this.#_checkSubcategory(payload.id);

        await this.#_prisma.section.update({
            data: {
                deletedAt: new Date().toISOString(),
            },
            where: {
                id: payload.id,
            },
        });

        return null;
    }

    async #_checkSubcategory(payload: string): Promise<null> {
        const foundCategory = await this.#_prisma.section.findFirst({
            where: {
                id: payload,
            },
        });

        if (!foundCategory) {
            throw new NotFoundException('Subcategory does not exist!');
        }
        return null;
    }


}