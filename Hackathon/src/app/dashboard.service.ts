import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

 getTeamMembersSummary():any[]
 {
   var TeamMembersSummary=[
    {TeamName:"BitByBit",TeamMembersCount:3,TemporarilyUnavailableMembers:0},
    {TeamName:"TechPhantoms",TeamMembersCount:3,TemporarilyUnavailableMembers:0},
    {TeamName:"SRS",TeamMembersCount:3,TemporarilyUnavailableMembers:0}
   ];
   return TeamMembersSummary;
 }
}
