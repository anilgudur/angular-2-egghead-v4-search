import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent }   from './list.component';
import { WikipediaModule } from '../wikipedia/wikipedia.module';

@NgModule({
    imports: [
        CommonModule,
        WikipediaModule
    ],
    exports: [ListComponent, CommonModule],
    declarations: [ListComponent],
    providers: []
})
export class ListModule { }
