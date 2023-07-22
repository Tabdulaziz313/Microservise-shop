"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshSign = exports.sign = void 0;
const jwt = require("jsonwebtoken");
const _constants_1 = require("../constants");
const sign = (payload) => jwt.sign(payload, '1q2w3e4r', {
    expiresIn: _constants_1.JWT_EXPIRE_ACCESS,
});
exports.sign = sign;
const refreshSign = (payload) => jwt.sign(payload, '1q2w3e4r', {
    expiresIn: _constants_1.JWT_EXPIRE_REFRESH,
});
exports.refreshSign = refreshSign;
//# sourceMappingURL=sign.helper.js.map