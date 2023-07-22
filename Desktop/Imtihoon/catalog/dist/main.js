"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const app_config_1 = require("./config/app.config");
setImmediate(async () => {
    const app = await core_1.NestFactory.createMicroservice(app_1.App, {
        transport: microservices_1.Transport.TCP,
        options: app_config_1.appConfig.options,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
    }));
    await app.listen();
});
//# sourceMappingURL=main.js.map