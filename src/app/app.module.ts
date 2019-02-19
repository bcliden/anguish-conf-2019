import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { HomeComponent } from "./pages/home/home.component";
import { LocationComponent } from "./pages/location/location.component";
import { MapComponent } from "./pages/location/map/map.component";
import { PlenaryComponent } from "./pages/plenary/plenary.component";
import { KeynoteComponent } from "./pages/keynote/keynote.component";
import { InclusivityComponent } from './pages/inclusivity/inclusivity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScheduleComponent,
    HomeComponent,
    LocationComponent,
    MapComponent,
    PlenaryComponent,
    KeynoteComponent,
    InclusivityComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
