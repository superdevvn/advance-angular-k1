import { Component, OnInit, Input } from '@angular/core';
import * as uuid from "uuid";
import { IGoogleMapOption, GoogleMapOption } from './google-map.model';
import { } from 'googlemaps'
// declare var google:any;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() option: IGoogleMapOption;
  @Input() height: string = "50vh";
  @Input() width: string = "50vw";
controlId = uuid.v4();
mapOption: GoogleMapOption = new GoogleMapOption({});
map: google.maps.Map;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.mapOption = new GoogleMapOption(this.option);
        this.map = new google.maps.Map(document.getElementById(this.controlId), {
          zoom: 15,
          center: this.mapOption.center
          
        });
  }
  drawMarker(lat: number, lng: number){
    let marker = new google.maps.Marker({
      position: {lat,lng},
      map: this.map,
      title:"abc"
    })
  }

   drawButton(title: string, click: Function) {

    var controlDiv = document.createElement("div")

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
      console.log("aaa")
      // map.setCenter(chicago);
    });
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
  }
}
