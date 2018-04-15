import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GridControlComponent } from './grid-control/grid-control.component';
import { DemoGridComponent } from './demo-grid/demo-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    GridControlComponent,
    DemoGridComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
