"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _productService_instances, _productService__prisma, _productService__checkSubcategory;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let productService = exports.productService = class productService {
    constructor(prisme) {
        _productService_instances.add(this);
        _productService__prisma.set(this, void 0);
        __classPrivateFieldSet(this, _productService__prisma, prisme, "f");
    }
    async AllProduct() {
        let productAll = await __classPrivateFieldGet(this, _productService__prisma, "f").product.findMany({
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
    async OneProduct(payload) {
        const foundCategory = await __classPrivateFieldGet(this, _productService__prisma, "f").product.findUnique({
            select: {
                id: true,
                name: true,
                title: true
            }, where: {
                id: payload.id,
            }
        });
        if (!foundCategory) {
            throw new common_1.NotFoundException('Subcategory does not exist!');
        }
        return foundCategory;
    }
    async CreatedProduct(payload) {
        try {
            await __classPrivateFieldGet(this, _productService__prisma, "f").product.create({
                data: {
                    name: payload.name,
                    title: payload.title,
                    price: payload.price,
                    sectionId: payload.sectionId,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException('Subcategory already exists!');
        }
        return null;
    }
    async UpdateProduct(payload) {
        await __classPrivateFieldGet(this, _productService_instances, "m", _productService__checkSubcategory).call(this, payload.id);
        await __classPrivateFieldGet(this, _productService__prisma, "f").product.update({
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
    async DaletedProduct(payload) {
        await __classPrivateFieldGet(this, _productService_instances, "m", _productService__checkSubcategory).call(this, payload.id);
        await __classPrivateFieldGet(this, _productService__prisma, "f").product.update({
            data: {
                deletedAt: new Date().toISOString(),
            },
            where: {
                id: payload.id,
            },
        });
        return null;
    }
};
_productService__prisma = new WeakMap();
_productService_instances = new WeakSet();
_productService__checkSubcategory = async function _productService__checkSubcategory(payload) {
    const foundCategory = await __classPrivateFieldGet(this, _productService__prisma, "f").product.findFirst({
        where: {
            id: payload,
        },
    });
    if (!foundCategory) {
        throw new common_1.NotFoundException('Subcategory does not exist!');
    }
};
exports.productService = productService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], productService);
//# sourceMappingURL=product.service.js.map