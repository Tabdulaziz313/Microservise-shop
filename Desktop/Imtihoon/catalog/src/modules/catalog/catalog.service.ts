import { PrismaService } from "../../prisma/prisma.service";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CatalogCreatedRequest, CatalogDaleted, CatalogUpdate, OneCatalogInterface } from "./interface";


@Injectable()
export class CatalogService {
    readonly #_service: PrismaService

    constructor(prisme: PrismaService) {
        this.#_service = prisme
    }

    
    async catalogRetriveAll(): Promise<any> {
        const allCatalog = await this.#_service.catalog.findMany({
            select: {
                id: true,
                name: true,
                title: true
            }, where: {
                deletedAt: null,
            }
        })
        return allCatalog
    }
    async oneCatalog(payload : OneCatalogInterface): Promise<any> {
        const foundCategory = await this.#_service.catalog.findUnique({
            select: {
                id: true,
                name: true,
                title: true
            }, where: {
                id: payload.id,
            }
        });

        if (!foundCategory) {
            throw new NotFoundException('Subcategory does not exist!');
        }
        return foundCategory;
    }

    async createdCatalog(payload: CatalogCreatedRequest): Promise<null> {
        try {
            await this.#_service.catalog.create({
                data: {
                    name: payload.name,
                    title: payload.title,
                },
            });
        } catch (error) {
            console.log(error);
            throw new ConflictException('Subcategory already exists!');
        }
        return null;
    }


    async updateCatalog(payload: CatalogUpdate): Promise<null> {
        await this.#_checkSubcategory(payload.id);
        await this.#_service.catalog.update({
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

    async daletedCatalog(payload: CatalogDaleted): Promise<null> {
        await this.#_checkSubcategory(payload.id);

        await this.#_service.catalog.update({
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
        const foundCategory = await this.#_service.catalog.findFirst({
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