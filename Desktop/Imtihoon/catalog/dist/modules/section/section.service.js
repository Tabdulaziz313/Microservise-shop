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
var _sectionService_instances, _sectionService__prisma, _sectionService__checkSubcategory;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let sectionService = exports.sectionService = class sectionService {
    constructor(prisme) {
        _sectionService_instances.add(this);
        _sectionService__prisma.set(this, void 0);
        __classPrivateFieldSet(this, _sectionService__prisma, prisme, "f");
    }
    async AllSection() {
        const allSection = await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.findMany({
            select: {
                id: true,
                name: true,
                title: true,
                catalogId: true
            }, where: {
                deletedAt: null,
            }
        });
        return allSection;
    }
    async OneSection(payload) {
        const foundCategory = await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.findFirst({
            where: {
                id: payload,
            },
        });
        if (!foundCategory) {
            throw new common_1.NotFoundException('Subcategory does not exist!');
        }
        return foundCategory;
    }
    async CreatedSection(payload) {
        try {
            await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.create({
                data: {
                    name: payload.name,
                    title: payload.title,
                    catalogId: payload.catalogId,
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException('Subcategory already exists!');
        }
        return null;
    }
    async UpdateSection(payload) {
        await __classPrivateFieldGet(this, _sectionService_instances, "m", _sectionService__checkSubcategory).call(this, payload.id);
        await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.update({
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
    async DaletedSection(payload) {
        await __classPrivateFieldGet(this, _sectionService_instances, "m", _sectionService__checkSubcategory).call(this, payload.id);
        await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.update({
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
_sectionService__prisma = new WeakMap();
_sectionService_instances = new WeakSet();
_sectionService__checkSubcategory = async function _sectionService__checkSubcategory(payload) {
    const foundCategory = await __classPrivateFieldGet(this, _sectionService__prisma, "f").section.findFirst({
        where: {
            id: payload,
        },
    });
    if (!foundCategory) {
        throw new common_1.NotFoundException('Subcategory does not exist!');
    }
    return null;
};
exports.sectionService = sectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], sectionService);
//# sourceMappingURL=section.service.js.map