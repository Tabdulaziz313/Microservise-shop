"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogConfig = void 0;
const config_1 = require("@nestjs/config");
exports.catalogConfig = (0, config_1.registerAs)('catalog', () => {
    var _a;
    return ({
        host: (_a = process.env.CATALOG_SERVICE_HOST) !== null && _a !== void 0 ? _a : '0.0.0.0',
        port: process.env.CATALOG_SERVICE_PORT ? parseInt(process.env.EMPLOYEE_SERVICE_PORT, 10) : 3001,
        timeout: process.env.CATALOG_SERVICE_TIMEOUT ? parseInt(process.env.EMPLOYEE_SERVICE_TIMEOUT, 10) : 5000,
    });
});
//# sourceMappingURL=catalog.config.js.map