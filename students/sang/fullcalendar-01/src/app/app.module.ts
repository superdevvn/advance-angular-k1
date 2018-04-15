import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './controls/schedule/schedule.component';
import { DemoScheduleComponent } from './demo/demo-schedule/demo-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    DemoScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
