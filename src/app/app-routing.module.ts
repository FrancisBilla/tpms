import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTER_CONFIGURATION } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent as D } from "./screens/admin/components/dashboard/dashboard.component";
import { DashboardComponent } from "./screens/developer/components/dashboard/dashboard.component";
import { HourComponent } from "./screens/admin/components/hour/hour.component";
import { HoursComponent } from "./screens/developer/components/hours/hours.component";
import { ProjectsComponent } from "./screens/admin/components/projects/projects.component";
import { DevelopersComponent } from "./screens/admin/components/developers/developers.component";
import { AssignedprojectsComponent } from "./screens/developer/components/assignedprojects/assignedprojects.component";
import { VerifyComponent } from "./screens/verify/verify.component";
import { NavigationComponent } from "./screens/admin/navigation/navigation.component";
import { NavComponent } from "./screens/developer/nav/nav.component";
import { AddprojectComponent } from './screens/admin/components/addproject/addproject.component';
import { AreaComponent } from './screens/admin/components/area/area.component';
  

const routes: Routes = [

  {
    path: "admin",
    component: NavigationComponent,
    children: [
      { path: "projects", component: ProjectsComponent },
      { path: "hour", component: HourComponent },
      { path: "developer", component: DevelopersComponent },
      {path:"addproject", component:AddprojectComponent},
      {path:"reports", component:AreaComponent}
    ]
  },
  { path: '', component: VerifyComponent },
  {
    path: "developer",
    component: NavComponent,
    children: [
      { path: "hour", component: HoursComponent },
      { path: "projects", component: AssignedprojectsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
