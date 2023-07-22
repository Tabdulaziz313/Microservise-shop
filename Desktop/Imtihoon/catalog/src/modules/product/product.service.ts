import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { allProductInterface, createdProductInterface, daletedProductInterface, oneProductInterface, updateProductInterface } from "./interfaces";



@Injectable()
export class productService {
    readonly #_prisma: PrismaService

    constructor(prisme: PrismaService) {
        this.#_prisma = prisme
    }




    // Get

    async AllProduct(): Promise<any> {
        let productAll = await this.#_prisma.product.findMany({
            select: {
                id: true,
                name: true,
                title: true,
                price: true,
                sectionId: true,
            },
            where: {
                deletedAt: null,
            },
        });
        return productAll;
    }


    // GetOne

    async OneProduct( payload : oneProductInterface): Promise<any> {
        const foundCategory = await this.#_prisma.product.findUnique({
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


    // Created
    async CreatedProduct(payload: createdProductInterface): Promise<null> {
        try {
            await this.#_prisma.product.create({
                data: {
                    name: payload.name,
                    title: payload.title,
                    price: payload.price,
                    sectionId: payload.sectionId,
                },
            });
        } catch (error) {
            console.log(error);
            throw new ConflictException('Subcategory already exists!');
        }
        return null;
    }


    // Update
    async UpdateProduct(payload: updateProductInterface): Promise<null> {
        await this.#_checkSubcategory(payload.id);
        await this.#_prisma.product.update({
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
    async DaletedProduct(payload: daletedProductInterface): Promise<null> {
        await this.#_checkSubcategory(payload.id);

        await this.#_prisma.product.update({
            data: {
                deletedAt: new Date().toISOString(),
            },
            where: {
                id: payload.id,
            },
        });

        return null;
    }


    async #_checkSubcategory(payload: string) {
        const foundCategory = await this.#_prisma.product.findFirst({
            where: {
                id: payload,
            },
        });

        if (!foundCategory) {
            throw new NotFoundException('Subcategory does not exist!');
        }
    }

}


