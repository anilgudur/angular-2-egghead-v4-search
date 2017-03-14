import { Injectable } from "@angular/core";

import { LogDebugger, ConsoleService } from '../../app/core/logs/logs.module';

@Injectable()
export class ListAnotherService {

    constructor(
        private logDebugger: LogDebugger
    ){}

    items:Array<any> = [
        { id:0, name:'Anil', country:'Germany' },
        { id:1, name:'Anant', country:'Germany' },
        { id:2, name:'ABC', country:'CCC' }
    ];

    getItems() {
        this.logDebugger.debug("Getting list items.....LAS");
        return this.items;
    }
}