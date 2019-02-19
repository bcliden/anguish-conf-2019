import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { LocationComponent } from "./pages/location/location.component";
import { KeynoteComponent } from "./pages/keynote/keynote.component";
import { PlenaryComponent } from "./pages/plenary/plenary.component";
import { InclusivityComponent } from "./pages/inclusivity/inclusivity.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "location", component: LocationComponent },
  { path: "keynote", component: KeynoteComponent },
  { path: "plenary", component: PlenaryComponent },
  { path: "inclusivity", component: InclusivityComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
