import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScheduleControlComponent } from './controls/schedule-control/schedule-control.component';
import { DemoScheduleComponent } from './demo/demo-schedule/demo-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleControlComponent,
    DemoScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
