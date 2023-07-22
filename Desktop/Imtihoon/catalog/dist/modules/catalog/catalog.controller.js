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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var _CatalogController__service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const microservices_1 = require("@nestjs/microservices");
const enoms_1 = require("./enoms");
const dtos_1 = require("./dtos");
const daleted_catalog_dto_1 = require("./dtos/daleted-catalog.dto");
let CatalogController = exports.CatalogController = class CatalogController {
    constructor(prisma) {
        _CatalogController__service.set(this, void 0);
        __classPrivateFieldSet(this, _CatalogController__service, prisma, "f");
    }
    catalogRetriveAll() {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").catalogRetriveAll();
    }
    catalogOne(payload) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").oneCatalog(payload);
    }
    catalogCreated(payload) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").createdCatalog(payload);
    }
    catalogUpdate(payload) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").updateCatalog(payload);
    }
    catalogDaleted(payload) {
        console.log(payload);
        return __classPrivateFieldGet(this, _CatalogController__service, "f").daletedCatalog(payload);
    }
};
_CatalogController__service = new WeakMap();
__decorate([
    (0, microservices_1.MessagePattern)(enoms_1.Command.EMPLOYEE_RETRIEVE_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "catalogRetriveAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(enoms_1.Command.CATALOG_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "catalogOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(enoms_1.Command.CATALOG_CREATED),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CatalogCretedDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogCreated", null);
__decorate([
    (0, microservices_1.MessagePattern)(enoms_1.Command.CATALOG_UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogUpdate", null);
__decorate([
    (0, microservices_1.MessagePattern)(enoms_1.Command.CATALOG_DELETED),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [daleted_catalog_dto_1.CatalogDeletedDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogDaleted", null);
exports.CatalogController = CatalogController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
//# sourceMappingURL=catalog.controller.js.map