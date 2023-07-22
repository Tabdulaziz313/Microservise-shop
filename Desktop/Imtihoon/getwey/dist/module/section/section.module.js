"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionModuleGetwey = void 0;
const common_1 = require("@nestjs/common");
const section_contoller_1 = require("./section.contoller");
const _clients_1 = require("../../clients");
let SectionModuleGetwey = exports.SectionModuleGetwey = class SectionModuleGetwey {
};
exports.SectionModuleGetwey = SectionModuleGetwey = __decorate([
    (0, common_1.Module)({
        providers: [_clients_1.sectionServices],
        controllers: [section_contoller_1.sectionController],
    })
], SectionModuleGetwey);
//# sourceMappingURL=section.module.js.map