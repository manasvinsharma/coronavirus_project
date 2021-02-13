import { IndiaComponent } from './india/india.component';



import { HomeComponent } from './home/home.component';

import { CoronaHealthComponent } from './corona-health/corona-health.component';
import { CoronaProtectionComponent } from './corona-protection/corona-protection.component';
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
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {
    path: '',
    component: SideBarComponent,
    children: [{ path: 'worldStats', component: WorldStatsComponent }],
  },
  {path:'coronaNews',component:CoronaNewsComponent, canActivate:[AuthGuard]},
  {path:'coronaTracker',component:CoronaTrackerComponent, canActivate:[AuthGuard]},
  { path:'sidebar',
    component:SideBarComponent,
    children:[  {path:'worldStats',component:WorldStatsComponent},
                {path:'continentStats',component:ContinentStatsComponent},
                {path:'countryStats',component:CountryStatsComponent},
                {path:'india',component:IndiaComponent},
             ]
  },

  {path:'testYourself',component:TestYourselfComponent, canActivate:[AuthGuard]},

  {path: 'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},             

  {path:'coronaProtection',component:CoronaProtectionComponent},        
  {path:'coronaHealth',component:CoronaHealthComponent},        
       
  {path:'home',component:HomeComponent},        

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
