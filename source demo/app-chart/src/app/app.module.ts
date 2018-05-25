import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
