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
var _productService_instances, _productService__client, _productService__timeout, _productService__connect, _productService__disConnect, _productService__send;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const product_enum_1 = require("./enums/product.enum");
let productService = exports.productService = class productService {
    constructor(config) {
        _productService_instances.add(this);
        _productService__client.set(this, void 0);
        _productService__timeout.set(this, void 0);
        __classPrivateFieldSet(this, _productService__client, new microservices_1.ClientTCP({
            host: config.getOrThrow('catalog.host'),
            port: config.getOrThrow('catalog.port'),
        }), "f");
        __classPrivateFieldSet(this, _productService__timeout, config.getOrThrow('catalog.timeout'), "f");
    }
    async productReetriveAll() {
        return __classPrivateFieldGet(this, _productService_instances, "m", _productService__send).call(this, product_enum_1.productEnums.PRODUCT_ALL, null);
    }
    async productRetriveOne(payload) {
        return __classPrivateFieldGet(this, _productService_instances, "m", _productService__send).call(this, product_enum_1.productEnums.PRODUCT_ONE, payload);
    }
    async productCreated(payload) {
        return __classPrivateFieldGet(this, _productService_instances, "m", _productService__send).call(this, product_enum_1.productEnums.PRODUCT_CREATED, payload);
    }
    async productUpdate(payload) {
        return __classPrivateFieldGet(this, _productService_instances, "m", _productService__send).call(this, product_enum_1.productEnums.PRODUCT_CREATED, payload);
    }
    async productDaleted(payload) {
        return __classPrivateFieldGet(this, _productService_instances, "m", _productService__send).call(this, product_enum_1.productEnums.PRODUCT_CREATED, payload);
    }
};
_productService__client = new WeakMap();
_productService__timeout = new WeakMap();
_productService_instances = new WeakSet();
_productService__connect = async function _productService__connect() {
    await __classPrivateFieldGet(this, _productService__client, "f").connect();
};
_productService__disConnect = function _productService__disConnect() {
    __classPrivateFieldGet(this, _productService__client, "f").close();
};
_productService__send = async function _productService__send(pattern, payload) {
    try {
        return await (0, rxjs_1.firstValueFrom)(__classPrivateFieldGet(this, _productService__client, "f").send(pattern, payload));
    }
    catch (error) {
        console.log(error);
        throw new common_1.InternalServerErrorException(error);
    }
};
exports.productService = productService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], productService);
//# sourceMappingURL=product.service.js.map