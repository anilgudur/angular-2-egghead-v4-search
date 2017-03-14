import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaComponent }   from './wikipedia.component';

@NgModule({
    // imports: [],
    // exports: [],
    // declarations: [NameComponent],
    // providers: [],
})
export class WikipediaModule {
    static forRoot() {
        return {
            ngModule: WikipediaModule,
            // providers: [
            //     {provide: ListService, useClass: ListService}, 
            //     {provide: ListAnotherService, useClass: ListAnotherService}, 
            // ],
            declarations: [WikipediaComponent],
            imports: [CommonModule],
            exports: [WikipediaComponent, CommonModule],
        }
    }
}

export {
    WikipediaComponent
}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { WikipediaComponent }   from './wikipedia.component';

// @NgModule({
//     imports: [CommonModule],
//     exports: [WikipediaComponent, CommonModule],
//     declarations: [WikipediaComponent],
//     providers: []
// })
// export class WikipediaModule { }
