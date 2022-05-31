import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent}, /** component is name of the  class in dashboard.component.ts file */
  {path:"about",component:AboutComponent}   ,
  {path:"",redirectTo:"dashboard",pathMatch:"full"} /** to display dashboard page as default when URL is empty  */

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
