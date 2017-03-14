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
var config_providers_1 = require('../config/config.providers');
var log_debugger_service_1 = require('./log-debugger.service');
exports.LogDebugger = log_debugger_service_1.LogDebugger;
var console_service_1 = require('./console.service');
exports.ConsoleService = console_service_1.ConsoleService;
var LogsModule = (function () {
    function LogsModule() {
    }
    LogsModule.forRoot = function () {
        return {
            ngModule: LogsModule,
            providers: [
                //{provide: LogDebugger, useClass: LogDebugger}, 
                {
                    provide: log_debugger_service_1.LogDebugger,
                    useFactory: function (consoleService, IS_ENABLED_LOG_DEBUGGER) {
                        return new log_debugger_service_1.LogDebugger(consoleService, IS_ENABLED_LOG_DEBUGGER);
                    },
                    deps: [console_service_1.ConsoleService, config_providers_1.IS_ENABLED_LOG_DEBUGGER]
                },
                { provide: console_service_1.ConsoleService, useClass: console_service_1.ConsoleService },
            ]
        };
    };
    LogsModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], LogsModule);
    return LogsModule;
}());
exports.LogsModule = LogsModule;
//# sourceMappingURL=logs.module.js.map