import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssFlexComponent } from "../app/css-flex/css-flex.component";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{path: 'home',component: HomeComponent},
	{path: 'css-flex',component: CssFlexComponent},
	{path: 'about',component: AboutComponent},
	{path: 'dashboard',component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
