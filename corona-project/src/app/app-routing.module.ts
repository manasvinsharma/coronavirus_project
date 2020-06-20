import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TestYourselfComponent } from './test-yourself/test-yourself.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CoronaTrackerComponent } from './corona-tracker/corona-tracker.component';
import { CoronaNewsComponent } from './corona-news/corona-news.component';
import { ContinentStatsComponent } from './continent-stats/continent-stats.component';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'coronaNews',component:CoronaNewsComponent},
  {path:'coronaTracker',component:CoronaTrackerComponent},
  { path:'sidebar',
    component:SideBarComponent,
    children:[  {path:'worldStats',component:WorldStatsComponent},
                {path:'continentStats',component:ContinentStatsComponent},
                {path:'countryStats',component:CountryStatsComponent},
             ]
  },
  
  // {path:'sidebar/continentStats',component:ContinentStatsComponent},
  {path:'testYourself',component:TestYourselfComponent},
  {path:'login', component:LoginComponent} ,      
  {path:'signup',component:SignupComponent}        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
