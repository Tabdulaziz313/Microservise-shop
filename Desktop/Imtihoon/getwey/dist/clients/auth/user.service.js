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
var _UserService_instances, _UserService__client, _UserService__timeout, _UserService__connect, _UserService__disConnect, _UserService__send;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const enums_1 = require("./enums");
let UserService = exports.UserService = class UserService {
    constructor(config) {
        _UserService_instances.add(this);
        _UserService__client.set(this, void 0);
        _UserService__timeout.set(this, void 0);
        __classPrivateFieldSet(this, _UserService__client, new microservices_1.ClientTCP({
            host: config.getOrThrow('user.host'),
            port: config.getOrThrow('user.port'),
        }), "f");
        __classPrivateFieldSet(this, _UserService__timeout, config.getOrThrow('user.timeout'), "f");
    }
    async signUp(payload) {
        return __classPrivateFieldGet(this, _UserService_instances, "m", _UserService__send).call(this, enums_1.UserCommand.AUTH_SIGN_UP, payload);
    }
    async signIn(payload) {
        return __classPrivateFieldGet(this, _UserService_instances, "m", _UserService__send).call(this, enums_1.UserCommand.AUTH_SIGN_IN, payload);
    }
};
_UserService__client = new WeakMap();
_UserService__timeout = new WeakMap();
_UserService_instances = new WeakSet();
_UserService__connect = async function _UserService__connect() {
    await __classPrivateFieldGet(this, _UserService__client, "f").connect();
};
_UserService__disConnect = function _UserService__disConnect() {
    __classPrivateFieldGet(this, _UserService__client, "f").close();
};
_UserService__send = async function _UserService__send(pattern, payload) {
    try {
        return await (0, rxjs_1.firstValueFrom)(__classPrivateFieldGet(this, _UserService__client, "f").send(pattern, payload));
    }
    catch (error) {
        if (error.name) {
            throw new common_1.HttpException(error.response, error.status);
        }
        throw new common_1.InternalServerErrorException(error);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map