import { OpaqueToken } from '@angular/core';

export const IS_ENABLED_LOG_DEBUGGER = new OpaqueToken('IS_ENABLED_LOG_DEBUGGER');

export const CONFIG_PROVIDERS = [
    { provide: IS_ENABLED_LOG_DEBUGGER, useValue: true }
];