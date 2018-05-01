import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ScheduleControlComponent } from './controls/schedule-control/schedule-control.component';
import { DemoScheduleComponent } from './demo/demo-schedule/demo-schedule.component';
import { GridControlComponent } from './controls/grid-control/grid-control.component';
import { DemoGridComponent } from './demo/demo-grid/demo-grid.component';
import { HttpModule } from '@angular/http';
import { GoogleMapComponent } from './google-map/google-map.component';
import { DemoSocketComponent } from './demo/demo-socket/demo-socket.component';
import { SocketService } from './services/socket.service';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleControlComponent,
    DemoScheduleComponent,
    GridControlComponent,
    DemoGridComponent,
    GoogleMapComponent,
    DemoSocketComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjGtHZH9DCXkwTih-xZYkZ3CJDsFdeTVw'
    })
    
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
