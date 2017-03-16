import { Component, OnInit } from '@angular/core';

import { WikipediaSearchService } from './wikipedia-search.service';

//application wide shared Rx operators
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'wikipedia',
    templateUrl: 'wikipedia.component.html',
    //styleUrls: ['wikipedia.component.css'],
})
export class WikipediaComponent {
    items:Array<string>;
    private term$ = new Subject<string>();
    constructor(private wikipediaSearchService: WikipediaSearchService){}

    ngOnInit(): void {
        this.term$.subscribe(term => this.search(term));
    }

    search(term: string) {
        this.wikipediaSearchService.search(term)
            .subscribe(results => this.items = results);
    }
}
