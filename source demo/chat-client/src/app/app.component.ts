import { Component, ViewChild } from '@angular/core';
import { IGoogleMapOption } from './controls/google-map-control/google-map.model';
import { GoogleMapControlComponent } from './controls/google-map-control/google-map-control.component';
import { DjService } from './services/dj.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private djService: DjService){
    djService.hello();
  }
}
