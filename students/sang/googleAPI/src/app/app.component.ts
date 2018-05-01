import { Component, ViewChild } from '@angular/core';
import { IGoogleMapOption } from './google-map/google-map.model';
import { GoogleMapComponent } from './google-map/google-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mapOption: IGoogleMapOption;
  @ViewChild('googleMap') googleMap: GoogleMapComponent
  constructor(){
    this.mapOption = {};
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      
    })
  }
}
