import { ContinentStatsComponent } from './continent-stats/continent-stats.component';
import { WorldStatsComponent } from './world-stats/world-stats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'coronaStats',component:ContinentStatsComponent},         // i added this 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
