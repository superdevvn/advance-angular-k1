import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleControlComponent } from './controls/schedule-control/schedule-control.component';
import { DemoScheduleComponent } from './demo/demo-schedule/demo-schedule.component';
import { GridControlComponent } from './controls/grid-control/grid-control.component';
import { DemoGridComponent } from './demo/demo-grid/demo-grid.component';
import { HttpModule } from '@angular/http';
import { GoogleMapControlComponent } from './controls/google-map-control/google-map-control.component';
import { DemoSocketComponent } from './demo/demo-socket/demo-socket.component';
import { SocketService } from './services/socket.service';
import { DjService } from './services/dj.service';
import { Dj1Service } from './services/dj1.service';
import { Dj2Service } from './services/dj2.service';
import { Dj3Service } from './services/dj3.service';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleControlComponent,
    DemoScheduleComponent,
    GridControlComponent,
    DemoGridComponent,
    GoogleMapControlComponent,
    DemoSocketComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    SocketService,
    { provide: DjService, useClass: Dj3Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
