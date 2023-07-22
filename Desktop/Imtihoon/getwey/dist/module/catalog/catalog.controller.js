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
const _clients_1 = require("../../clients");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
let CatalogController = exports.CatalogController = class CatalogController {
    constructor(service) {
        _CatalogController__service.set(this, void 0);
        __classPrivateFieldSet(this, _CatalogController__service, service, "f");
    }
    async catalogRetriveAll(query) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").catalogRetrieveAll(query);
    }
    async catalogOne(param) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").catalogOne(param);
    }
    async catalogCreated(body) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").ctalogCreated(body);
    }
    async catalogUpdate(body, param) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").catalogUpdate(Object.assign(Object.assign({}, param), body));
    }
    async catalogDaleted(param) {
        return __classPrivateFieldGet(this, _CatalogController__service, "f").catalogDaleted(param);
    }
};
_CatalogController__service = new WeakMap();
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogRetriveAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.OneCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogOne", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)('created'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreatedCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogCreated", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreatedCatalogDto,
        dtos_1.OneCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogUpdate", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Delete)('daleted/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.DaletedCatalogDto]),
    __metadata("design:returntype", Promise)
], CatalogController.prototype, "catalogDaleted", null);
exports.CatalogController = CatalogController = __decorate([
    (0, swagger_1.ApiTags)('Cantoller'),
    (0, common_1.Controller)({
        path: 'catalog',
        version: '1'
    }),
    __metadata("design:paramtypes", [_clients_1.CatalogService])
], CatalogController);
//# sourceMappingURL=catalog.controller.js.map