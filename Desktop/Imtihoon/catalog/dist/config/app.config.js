"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.appConfig = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: (_a = process.env.APP_HOST) !== null && _a !== void 0 ? _a : "127.0.0.1",
        port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 3001,
    }
};
//# sourceMappingURL=app.config.js.map