import { Component, ViewChild } from '@angular/core';
import { IGoogleMapOption } from './controls/google-map-control/google-map.model';
import { GoogleMapControlComponent } from './controls/google-map-control/google-map-control.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mapOption: IGoogleMapOption;
  @ViewChild('googleMap') googleMap: GoogleMapControlComponent;
  constructor(){
    this.mapOption = {};
  }
  ngAfterViewInit(){
    setTimeout(() => {
        this.googleMap.drawButton('Tuan Anh Oc Heu', ()=>{ 
          this.googleMap.drawMarker(10.853723, 106.633737);
        });
    }, 5000);
  }
}
