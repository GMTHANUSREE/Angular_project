import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './project/project.component';

@NgModule({
  declarations: [DashboardComponent, MyProfileComponent, AboutComponent,ProjectsComponent],
  imports: [CommonModule,FormsModule],
  exports: [DashboardComponent, MyProfileComponent, AboutComponent,ProjectsComponent],
  providers: [DashboardService]
})
export class AdminModule 
{
  
 }