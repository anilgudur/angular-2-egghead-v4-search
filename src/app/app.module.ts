import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CONFIG_PROVIDERS, IS_ENABLED_LOG_DEBUGGER } from './core/config/config.providers';
import { ListModule }   from './list/list.module';
import { ListServiceModule }   from './list/list-service.module';
import { LogsModule } from './core/logs/logs.module';

@NgModule({
  imports: [ 
      BrowserModule, 
      ListModule, 
      ListServiceModule.forRoot(),
      LogsModule.forRoot()
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    CONFIG_PROVIDERS
  ]
})
export class AppModule { }