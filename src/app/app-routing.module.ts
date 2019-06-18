
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search-component';
import { DashboardComponent } from './components/dashboard/dashboard-component';

const routes: Routes = [
  { path: 'Search', component: SearchComponent },
  { path: 'Home', component: DashboardComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
