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
var _CatalogService_instances, _CatalogService__client, _CatalogService__timeout, _CatalogService__connect, _CatalogService__disConnect, _CatalogService__send;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const enums_1 = require("./enums");
let CatalogService = exports.CatalogService = class CatalogService {
    constructor(config) {
        _CatalogService_instances.add(this);
        _CatalogService__client.set(this, void 0);
        _CatalogService__timeout.set(this, void 0);
        __classPrivateFieldSet(this, _CatalogService__client, new microservices_1.ClientTCP({
            host: config.getOrThrow('catalog.host'),
            port: config.getOrThrow('catalog.port'),
        }), "f");
        __classPrivateFieldSet(this, _CatalogService__timeout, config.getOrThrow('catalog.timeout'), "f");
    }
    async catalogRetrieveAll(payload) {
        return __classPrivateFieldGet(this, _CatalogService_instances, "m", _CatalogService__send).call(this, enums_1.Command.EMPLOYEE_RETRIEVE_ALL, payload);
    }
    async catalogOne(payload) {
        return __classPrivateFieldGet(this, _CatalogService_instances, "m", _CatalogService__send).call(this, enums_1.Command.CATALOG_ONE, payload);
    }
    async ctalogCreated(payload) {
        return __classPrivateFieldGet(this, _CatalogService_instances, "m", _CatalogService__send).call(this, enums_1.Command.CATALOG_CREATED, payload);
    }
    async catalogUpdate(payload) {
        return __classPrivateFieldGet(this, _CatalogService_instances, "m", _CatalogService__send).call(this, enums_1.Command.CATALOG_UPDATE, payload);
    }
    async catalogDaleted(payload) {
        return __classPrivateFieldGet(this, _CatalogService_instances, "m", _CatalogService__send).call(this, enums_1.Command.CATALOG_DELETED, payload);
    }
};
_CatalogService__client = new WeakMap();
_CatalogService__timeout = new WeakMap();
_CatalogService_instances = new WeakSet();
_CatalogService__connect = async function _CatalogService__connect() {
    await __classPrivateFieldGet(this, _CatalogService__client, "f").connect();
};
_CatalogService__disConnect = function _CatalogService__disConnect() {
    __classPrivateFieldGet(this, _CatalogService__client, "f").close();
};
_CatalogService__send = async function _CatalogService__send(pattern, payload) {
    try {
        return await (0, rxjs_1.firstValueFrom)(__classPrivateFieldGet(this, _CatalogService__client, "f").send(pattern, payload));
    }
    catch (error) {
        console.log(error);
        throw new common_1.InternalServerErrorException(error);
    }
};
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map