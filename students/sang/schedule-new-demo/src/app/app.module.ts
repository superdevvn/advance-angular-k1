import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScheduleControlComponent } from './control/schedule-control/schedule-control.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
