import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaComponent }   from './wikipedia.component';
import { WikipediaSearchService } from './wikipedia-search.service';

//application wide shared Rx operators
import 'rxjs/add/operator/map';

@NgModule({
    imports: [CommonModule],
    exports: [WikipediaComponent, CommonModule],
    declarations: [WikipediaComponent],
    providers: [WikipediaSearchService],
})
export class WikipediaModule {}