import { Injectable } from '@angular/core';

import { URLSearchParams, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaSearchService {

    constructor(private jsonp: Jsonp){}

    search(term: string) {
        let search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');

        return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback-JSON_CALLBACK', {search})
                    .map(response => response.json()[1]);
    }

}
