"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var list_service_1 = require('./list.service');
exports.ListService = list_service_1.ListService;
var list_another_service_1 = require('./list-another.service');
exports.ListAnotherService = list_another_service_1.ListAnotherService;
var ListServiceModule = (function () {
    function ListServiceModule() {
    }
    ListServiceModule.forRoot = function () {
        return {
            ngModule: ListServiceModule,
            providers: [
                { provide: list_service_1.ListService, useClass: list_service_1.ListService },
                { provide: list_another_service_1.ListAnotherService, useClass: list_another_service_1.ListAnotherService },
            ]
        };
    };
    ListServiceModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], ListServiceModule);
    return ListServiceModule;
}());
exports.ListServiceModule = ListServiceModule;
//# sourceMappingURL=list-service.module.js.map