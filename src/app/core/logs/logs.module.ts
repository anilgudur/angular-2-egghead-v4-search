import { NgModule } from '@angular/core';

import { IS_ENABLED_LOG_DEBUGGER } from '../config/config.providers';
import { LogDebugger } from './log-debugger.service';
import { ConsoleService } from './console.service';
import { Inject } from '@angular/core';

@NgModule({
    // imports: [],
    // exports: [],
    // declarations: [NameComponent],
    // providers: [],
})
export class LogsModule {
    static forRoot() {
        return {
            ngModule: LogsModule,
            providers: [
                //{provide: LogDebugger, useClass: LogDebugger}, 
                {
                    provide: LogDebugger,
                    useFactory: (consoleService:ConsoleService, IS_ENABLED_LOG_DEBUGGER:boolean) => {
                        return new LogDebugger(consoleService, IS_ENABLED_LOG_DEBUGGER);
                    },
                    deps: [ConsoleService, IS_ENABLED_LOG_DEBUGGER ]
                },
                { provide: ConsoleService, useClass: ConsoleService },
                //{ provide: 'isLogDebuggerEnabled', useValue: false }
                //{ provide: 'IS_ENABLED_LOG_DEBUGGER', useValue: false }
            ]
        }
    }
}

export {
    LogDebugger,
    ConsoleService
}
