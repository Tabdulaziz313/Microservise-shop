"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const _config_1 = require("./config");
const swagger_1 = require("@nestjs/swagger");
setImmediate(async () => {
    const app = await core_1.NestFactory.create(app_1.App);
    const document = swagger_1.SwaggerModule.createDocument(app, _config_1.swaggerConfig.options);
    swagger_1.SwaggerModule.setup(_config_1.swaggerConfig.path, app, document, {
        swaggerOptions: {
            defaultModelsExpandDepth: -1
        }
    });
    await app.listen(_config_1.appConfig.port);
});
//# sourceMappingURL=main.js.map