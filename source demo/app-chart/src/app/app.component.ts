import { Component } from '@angular/core';
import { DonutChartOption } from './donut-chart/donut-chart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  donutChartOption: DonutChartOption;
  constructor(){
    this.donutChartOption = {
      title: 'SuperDev',
      items:[{
        title: 'Title 1',
        value: 10,
        color: 'rgb(255, 99, 132)'
      },{
        title: 'Title 2',
        value: 20,
        color: 'rgb(75, 192, 192)'
      },{
        title: 'Title 3',
        value: 40,
        color: 'rgb(255, 205, 86)'
      },{
        title: 'Title 4',
        value: 30,
        color: 'rgb(255, 159, 64)'
      }]
    }
  }
}

// red: 'rgb(255, 99, 132)',
// 	orange: 'rgb(255, 159, 64)',
// 	yellow: 'rgb(255, 205, 86)',
// 	green: 'rgb(75, 192, 192)',
// 	blue: 'rgb(54, 162, 235)',
// 	purple: 'rgb(153, 102, 255)',
// 	grey: 'rgb(201, 203, 207)'
