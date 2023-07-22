"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConfig = void 0;
const config_1 = require("@nestjs/config");
exports.userConfig = (0, config_1.registerAs)('user', () => ({
    host: process.env.USER_SERVICE_HOST,
    port: process.env.USER_SERVICE_PORT ? parseInt(process.env.USER_SERVICE_PORT, 10) : undefined,
    timeout: process.env.USER_SERVICE_TIMEOUT ? parseInt(process.env.USER_SERVICE_TIMEOUT, 10) : undefined,
}));
//# sourceMappingURL=user.config.js.map