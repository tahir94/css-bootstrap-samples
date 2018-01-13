import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssFlexComponent } from "../app/css-flex/css-flex.component";
import { AboutComponent } from './about/about.component';
const routes: Routes = [
	{path: 'css-flex',component: CssFlexComponent},
	{path: 'about',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
