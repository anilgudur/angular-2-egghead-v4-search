import { Component, OnInit, Inject } from '@angular/core';

import { ListService, ListAnotherService } from './list-service.module';
import { LogDebugger, ConsoleService } from '../core/logs/logs.module';

@Component({
    moduleId: module.id,
    selector: 'list-component',
    template:`
        <ul>
            <li *ngFor="let item of items">
                {{item.id}}: {{item.name}} lives in {{item.country}}
            </li>
        </ul>
    `,
    providers: [
        // {
        //     provide: LogDebugger,
        //     useFactory: (consoleService:ConsoleService) => {
        //         return new LogDebugger(consoleService, true);
        //     },
        //     deps: [ConsoleService]
        // },
        // {
        //     provide: 'isEnabledLogDebugger',
        //     useValue: true
        // }
    ]
})
export class ListComponent implements OnInit {

    constructor(
            private listService: ListService,
            private listAnotherService: ListAnotherService,
            private logDebugger: LogDebugger
    ){}

    items:Array<any>;

    ngOnInit(): void {
        this.logDebugger.debug("Getting list items...");
        this.items = this.listService.getItems();

        //this.items = this.listAnotherService.getItems();
    }

}