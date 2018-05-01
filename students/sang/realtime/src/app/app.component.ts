import { Component } from '@angular/core';
import { IGoogleMapOption } from './google-map/google-map.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mapOption: IGoogleMapOption;
  constructor(){
  }
}
