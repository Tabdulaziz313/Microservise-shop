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
var _sectionController__service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionController = void 0;
const _clients_1 = require("../../clients");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const one_dto_1 = require("./dtos/one.dto");
const daleted_dto_1 = require("./dtos/daleted.dto");
const created_dto_1 = require("./dtos/created.dto");
let sectionController = exports.sectionController = class sectionController {
    constructor(service) {
        _sectionController__service.set(this, void 0);
        __classPrivateFieldSet(this, _sectionController__service, service, "f");
    }
    async sectionRetriveAll(query) {
        return __classPrivateFieldGet(this, _sectionController__service, "f").sectionReetriveAll(query);
    }
    async sectionRetriveOne(param) {
        return __classPrivateFieldGet(this, _sectionController__service, "f").sectionRetriveOne(param);
    }
    async sectionCreated(body) {
        return __classPrivateFieldGet(this, _sectionController__service, "f").sectionCreated(body);
    }
    async sectonUpdate(body, param) {
        return __classPrivateFieldGet(this, _sectionController__service, "f").sectionUpdate(Object.assign(Object.assign({}, param), body));
    }
    async sectionDeleted(param) {
        return __classPrivateFieldGet(this, _sectionController__service, "f").sectionDaleted(param);
    }
};
_sectionController__service = new WeakMap();
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)(''),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], sectionController.prototype, "sectionRetriveAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [one_dto_1.OneSectionDto]),
    __metadata("design:returntype", Promise)
], sectionController.prototype, "sectionRetriveOne", null);
__decorate([
    (0, common_1.Post)('/created'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [created_dto_1.CreatedSectionDto]),
    __metadata("design:returntype", Promise)
], sectionController.prototype, "sectionCreated", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [created_dto_1.CreatedSectionDto,
        one_dto_1.OneSectionDto]),
    __metadata("design:returntype", Promise)
], sectionController.prototype, "sectonUpdate", null);
__decorate([
    (0, common_1.Delete)('deleted/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [daleted_dto_1.DaletedSectionDto]),
    __metadata("design:returntype", Promise)
], sectionController.prototype, "sectionDeleted", null);
exports.sectionController = sectionController = __decorate([
    (0, swagger_1.ApiTags)('Section'),
    (0, common_1.Controller)({
        path: '/catalog/section/',
        version: '1'
    }),
    __metadata("design:paramtypes", [_clients_1.sectionServices])
], sectionController);
//# sourceMappingURL=section.contoller.js.map