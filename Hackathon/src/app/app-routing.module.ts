import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/project/project.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"}, /** to display login page as default when URL is empty  */
  {path: "login", component: LoginComponent },
  {path:"dashboard",component:DashboardComponent}, /** component is name of the  class in dashboard.component.ts file */
  {path:"about",component:AboutComponent}  ,
  {path:"project",component:ProjectsComponent}

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
