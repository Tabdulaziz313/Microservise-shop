"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_1 = require("./app");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const _config_1 = require("./config");
const filtres_1 = require("./filtres");
setImmediate(async () => {
    const app = await core_1.NestFactory.createMicroservice(app_1.App, {
        transport: microservices_1.Transport.TCP,
        options: _config_1.appConfig.options,
    });
    app.useGlobalFilters(new filtres_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen();
});
//# sourceMappingURL=main.js.map