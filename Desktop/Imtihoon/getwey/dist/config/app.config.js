"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
exports.appConfig = {
    mode: (_a = process.env.APP_MODE) !== null && _a !== void 0 ? _a : 'development',
    name: (_b = process.env.APP_NAME) !== null && _b !== void 0 ? _b : 'gateway',
    host: (_c = process.env.APP_HOST) !== null && _c !== void 0 ? _c : '127.0.0.1',
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 8080
};
//# sourceMappingURL=app.config.js.map