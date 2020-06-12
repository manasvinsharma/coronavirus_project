import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import {HttpClientModule} from '@angular/common/http';  // i added this to include httpclientmodule to use data services
import { ContinentStatsComponent } from './continent-stats/continent-stats.component';                  

@NgModule({
  declarations: [
    AppComponent,
    WorldStatsComponent,
    ContinentStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
