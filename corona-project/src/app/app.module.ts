import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import {HttpClientModule} from '@angular/common/http';  // i added this to include httpclientmodule to use data services
import { ContinentStatsComponent } from './continent-stats/continent-stats.component';
import { CoronaNewsComponent } from './corona-news/corona-news.component';
import { CoronaTrackerComponent } from './corona-tracker/corona-tracker.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestYourselfComponent } from './test-yourself/test-yourself.component';   
import { FormsModule } from '@angular/forms';
import { IndiaComponent } from './india/india.component';
import { CoronaHealthComponent } from './corona-health/corona-health.component';
import { CoronaProtectionComponent } from './corona-protection/corona-protection.component';
import { HomeComponent } from './home/home.component';               

@NgModule({
  declarations: [
    AppComponent,
    WorldStatsComponent,
    ContinentStatsComponent,
    CoronaNewsComponent,
    CoronaTrackerComponent,
    SideBarComponent,
    CountryStatsComponent,
    LoginComponent,
    SignupComponent,
    TestYourselfComponent,
    IndiaComponent,
    CoronaHealthComponent,
    CoronaProtectionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
