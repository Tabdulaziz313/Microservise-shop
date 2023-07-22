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
var _userService_instances, _userService__prisma, _userService__checkUser, _userService__checkExistingUser;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const _helpers_1 = require("../../helpers");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let userService = exports.userService = class userService {
    constructor(prisma) {
        _userService_instances.add(this);
        _userService__prisma.set(this, void 0);
        __classPrivateFieldSet(this, _userService__prisma, prisma, "f");
    }
    async signIn(payload) {
        const user = await __classPrivateFieldGet(this, _userService_instances, "m", _userService__checkUser).call(this, {
            username: payload.username,
            password: payload.password,
        });
        return {
            accessToken: await (0, _helpers_1.sign)({ id: user.id }),
            refreshToken: await (0, _helpers_1.refreshSign)({ id: user.id }),
        };
    }
    async signUp(payload) {
        await __classPrivateFieldGet(this, _userService_instances, "m", _userService__checkExistingUser).call(this, { username: payload.username });
        const newUser = await __classPrivateFieldGet(this, _userService__prisma, "f").user.create({
            data: {
                username: payload.username,
                password: payload.password,
            },
            select: {
                id: true,
            },
        });
        return {
            accessToken: (0, _helpers_1.sign)({ id: newUser.id }),
            refreshToken: (0, _helpers_1.refreshSign)({ id: newUser.id }),
        };
    }
};
_userService__prisma = new WeakMap();
_userService_instances = new WeakSet();
_userService__checkUser = async function _userService__checkUser(payload) {
    const user = await __classPrivateFieldGet(this, _userService__prisma, "f").user.findFirst({
        where: {
            username: payload.username,
            password: payload.password,
            deletedAt: null,
        },
        select: {
            id: true,
        },
    });
    if (!user) {
        throw new common_1.NotFoundException('User not found');
    }
    return {
        id: user.id,
    };
};
_userService__checkExistingUser = async function _userService__checkExistingUser(payload) {
    const user = await __classPrivateFieldGet(this, _userService__prisma, "f").user.findFirst({
        where: {
            username: payload.username,
            deletedAt: null,
        },
        select: {
            id: true,
        },
    });
    if (user) {
        throw new common_1.ConflictException('User already exists');
    }
    return null;
};
exports.userService = userService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], userService);
//# sourceMappingURL=user.servise.js.map