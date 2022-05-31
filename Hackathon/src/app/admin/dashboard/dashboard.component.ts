import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
/** declaration  the properties*/
  Designation: string = "";
  Username: string = "";
  TotalTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date = new Date();


 
  Teams: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor( private dashboardService:DashboardService){}


  ngOnInit(){
    /** initialize the properties*/
    this.Designation = 'Team Leader';
    this.Username = 'Basavaraj Juttiyavar';
    this.TotalTeamMembers = 67;
    this.TotalCostOfAllProjects = 21;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 0;
    this.CurrentExpenditure = 0;
    this.AvailableFunds = 0;
    this.ToDay = new Date();

    this.Teams=["Team A","Team B","Team C"];
    this.Years=[2022,2021];
    this.TeamMembersSummary= this.dashboardService.getTeamMembersSummary();
    this.TeamMembers=[
      {
        TeamName:"BitByBit",Members:[
        {ID:1,Name:"Thanushree",stauts:"Avaliable"},
        {ID:2,Name:"Sandeep Jadhav",stauts:"Avaliable"},
        {ID:3,Name:"Chethan Chavan",stauts:"Busy"}
      ]
      },
      {
        TeamName:"TechPhantoms",Members:[
        {ID:1,Name:"Neeraj Kumar",stauts:"Busy"},
        {ID:2,Name:"Ramya Yande",stauts:"Busy"}
      ]
      },
      {
        TeamName:"SRS",Members:[
        {ID:1,Name:"Ravalika",stauts:"Busy"},
        {ID:2,Name:"Sadiq",stauts:"Avaliable"},
        {ID:3,Name:"Shiledra Pal",stauts:"Busy"}
      ]
      }
    ]
}
  ChangeProject($event: any)
  {
    console.log($event.target.innerHTML)
    if($event.target.innerHTML== " Team A ")
    {
      this.ProjectCost = 200;
      this.CurrentExpenditure = 150;
      this.AvailableFunds = 50;
    } 
    else if ($event.target.innerHTML == " Team B ")
    {
      this.ProjectCost = 220;
      this.CurrentExpenditure= 180;
      this.AvailableFunds = 40;
    }
    else if ($event.target.innerHTML == " Team C ")
    {
      this.ProjectCost = 300;
      this.CurrentExpenditure= 150;
      this.AvailableFunds= 150;
    }
  }
}
