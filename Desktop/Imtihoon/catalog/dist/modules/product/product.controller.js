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
var _productController__service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const microservices_1 = require("@nestjs/microservices");
const enums_1 = require("./enums");
const dtos_1 = require("./dtos");
let productController = exports.productController = class productController {
    constructor(prisma) {
        _productController__service.set(this, void 0);
        __classPrivateFieldSet(this, _productController__service, prisma, "f");
    }
    productAll() {
        return __classPrivateFieldGet(this, _productController__service, "f").AllProduct();
    }
    productOne(payload) {
        return __classPrivateFieldGet(this, _productController__service, "f").OneProduct(payload);
    }
    productCreated(payload) {
        return __classPrivateFieldGet(this, _productController__service, "f").CreatedProduct(payload);
    }
    productUpdate(payload) {
        return __classPrivateFieldGet(this, _productController__service, "f").UpdateProduct(payload);
    }
    productDaleted(payload) {
        return __classPrivateFieldGet(this, _productController__service, "f").DaletedProduct(payload);
    }
};
_productController__service = new WeakMap();
__decorate([
    (0, microservices_1.MessagePattern)(enums_1.productEnums.PRODUCT_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], productController.prototype, "productAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(enums_1.productEnums.PRODUCT_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.OneProductDto]),
    __metadata("design:returntype", void 0)
], productController.prototype, "productOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(enums_1.productEnums.PRODUCT_CREATED),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreatedProductDto]),
    __metadata("design:returntype", void 0)
], productController.prototype, "productCreated", null);
__decorate([
    (0, microservices_1.MessagePattern)(enums_1.productEnums.PRODUCT_UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], productController.prototype, "productUpdate", null);
__decorate([
    (0, microservices_1.MessagePattern)(enums_1.productEnums.PRODUCT_DALETED),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.DaletedProductDto]),
    __metadata("design:returntype", void 0)
], productController.prototype, "productDaleted", null);
exports.productController = productController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [product_service_1.productService])
], productController);
//# sourceMappingURL=product.controller.js.map