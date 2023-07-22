"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAccessInterceptor = void 0;
class VerifyAccessInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const accessToken = request.headers["authorization"].replace('Bearer ', '');
        console.log(JSON.parse(JSON.stringify(Buffer.from(accessToken, 'base64').toString())));
        request.body.userId = 1;
        return next.handle();
    }
}
exports.VerifyAccessInterceptor = VerifyAccessInterceptor;
//# sourceMappingURL=verify-access.interceptor.js.map