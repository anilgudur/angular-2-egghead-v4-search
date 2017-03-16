import { Component } from '@angular/core';

import { WikipediaSearchService } from './wikipedia-search.service';

@Component({
    moduleId: module.id,
    selector: 'wikipedia',
    templateUrl: 'wikipedia.component.html',
    //styleUrls: ['wikipedia.component.css'],
})
export class WikipediaComponent {
    items:Array<string>;
    constructor(private wikipediaSearchService: WikipediaSearchService){}

    search(term: string) {
        this.wikipediaSearchService.search(term)
            .subscribe(results => this.items = results);
    }
}
