"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
exports.swaggerConfig = {
    path: (_a = process.env.SWAGGER_PATH) !== null && _a !== void 0 ? _a : '/docs',
    options: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            description: 'Main Gateway',
            title: 'Gateway'
        },
    }
};
//# sourceMappingURL=swager.config.js.map