import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaComponent }   from './wikipedia.component';
import { WikipediaSearchService } from './wikipedia-search.service';

@NgModule({
    imports: [CommonModule],
    exports: [WikipediaComponent, CommonModule],
    declarations: [WikipediaComponent],
    providers: [WikipediaSearchService],
})
export class WikipediaModule {}