import { NgModule } from '@angular/core';

import { ListService } from './list.service';
import { ListAnotherService } from './list-another.service';

@NgModule({
    // imports: [],
    // exports: [],
    // declarations: [NameComponent],
    // providers: [],
})
export class ListServiceModule {
    static forRoot() {
        return {
            ngModule: ListServiceModule,
            providers: [
                {provide: ListService, useClass: ListService}, 
                {provide: ListAnotherService, useClass: ListAnotherService}, 
                //{provide: ListService, useClass: ListAnotherService}
            ]
        }
    }
}

export {
    ListService,
    ListAnotherService
}
