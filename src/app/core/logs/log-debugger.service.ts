import { Injectable } from "@angular/core";

import { ConsoleService } from './console.service';

@Injectable()
export class LogDebugger {
    constructor(private consoleService: ConsoleService, private enabled: boolean){}

    debug(message:any) {
        if (this.enabled) {
            this.consoleService.log(`DEBUG: ${message}`);
        }
    }
}