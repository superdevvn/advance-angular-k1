import { Component, OnInit, Input } from '@angular/core';
import * as uuid from 'uuid';
import { IGoogleMapOption, GoogleMapOption } from './google-map.model';
import { } from 'googlemaps';
import * as $ from 'jquery';
@Component({
  selector: 'app-google-map-control',
  templateUrl: './google-map-control.component.html',
  styleUrls: ['./google-map-control.component.css']
})
export class GoogleMapControlComponent implements OnInit {
  @Input() option: IGoogleMapOption;
  @Input() height: string = '100vh';
  @Input() width: string = '100vw';

  markers: google.maps.Marker[] = [];
  mapOption: GoogleMapOption = new GoogleMapOption({});
  map: google.maps.Map;
  controlId = uuid.v4();

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.mapOption = new GoogleMapOption(this.option);
    this.map = new google.maps.Map(document.getElementById(this.controlId), {
      zoom: this.mapOption.zoom,
      center: this.mapOption.center
    });
  }

  drawMarker(lat: number, lng: number) {
    let marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      title: 'Tuan Anh Oc Heu'
    });
    this.markers.push(marker);
    this.map.setCenter({lat,lng});
  }

  // drawButton(title: string, click: Function) {
  //   let controlDiv = document.createElement('div');
  //   // Set CSS for the control border.
  //   let controlUI = document.createElement('div');
  //   controlUI.style.backgroundColor = '#fff';
  //   controlUI.style.border = '2px solid #fff';
  //   controlUI.style.borderRadius = '3px';
  //   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  //   controlUI.style.cursor = 'pointer';
  //   controlUI.style.marginBottom = '22px';
  //   controlUI.style.textAlign = 'center';
  //   controlUI.title = title;
  //   controlDiv.appendChild(controlUI);

  //   // Set CSS for the control interior.
  //   let controlText = document.createElement('div');
  //   controlText.style.color = 'rgb(25,25,25)';
  //   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  //   controlText.style.fontSize = '16px';
  //   controlText.style.lineHeight = '38px';
  //   controlText.style.paddingLeft = '5px';
  //   controlText.style.paddingRight = '5px';
  //   controlText.innerHTML = title;
  //   controlUI.appendChild(controlText);

  //   // Setup the click event listeners: simply set the map to Chicago.
  //   controlUI.addEventListener('click', function() {
  //     click();
  //   });

  //   // controlDiv.index = 1;
  //   this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(controlDiv);
  // }

  drawButton(title: string, click: Function) {
    let elementId = uuid.v4();
    let element = `<button id="${elementId}" class="btn btn-primary">${title}</button>`;
    $('body').append(element);
    $(`#${elementId}`).click(() => {
      click();
    });
    // controlDiv.index = 1;
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById(elementId));
  }
}
