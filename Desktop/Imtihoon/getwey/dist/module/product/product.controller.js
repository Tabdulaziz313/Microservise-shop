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
var _productController__sevice;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const created_dto_1 = require("./dtos/created.dto");
const _clients_1 = require("../../clients");
const one_dto_1 = require("./dtos/one.dto");
const daleted_dto_1 = require("./dtos/daleted.dto");
let productController = exports.productController = class productController {
    constructor(service) {
        _productController__sevice.set(this, void 0);
        __classPrivateFieldSet(this, _productController__sevice, service, "f");
    }
    async productRetriveAll() {
        return __classPrivateFieldGet(this, _productController__sevice, "f").productReetriveAll();
    }
    async productRetriveOne(param) {
        return __classPrivateFieldGet(this, _productController__sevice, "f").productRetriveOne(param);
    }
    async productCreated(body) {
        return __classPrivateFieldGet(this, _productController__sevice, "f").productCreated(body);
    }
    async productUpdate(param, body) {
        return __classPrivateFieldGet(this, _productController__sevice, "f").productUpdate(Object.assign(Object.assign({}, param), body));
    }
    async productDeleted(param) {
        return __classPrivateFieldGet(this, _productController__sevice, "f").productDaleted(param);
    }
};
_productController__sevice = new WeakMap();
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], productController.prototype, "productRetriveAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [one_dto_1.OneProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "productRetriveOne", null);
__decorate([
    (0, common_1.Post)('created'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [created_dto_1.CreatedProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "productCreated", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [one_dto_1.OneProductDto,
        created_dto_1.CreatedProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "productUpdate", null);
__decorate([
    (0, common_1.Delete)('daleted/:id'),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [daleted_dto_1.DaletedProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "productDeleted", null);
exports.productController = productController = __decorate([
    (0, swagger_1.ApiTags)('Product'),
    (0, common_1.Controller)({
        path: 'catalog/section/product/',
        version: '1'
    }),
    __metadata("design:paramtypes", [_clients_1.productService])
], productController);
//# sourceMappingURL=product.controller.js.map