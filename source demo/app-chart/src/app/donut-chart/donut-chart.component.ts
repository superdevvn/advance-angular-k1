import { Component, OnInit, Input } from '@angular/core';
import * as uuid from 'uuid';
import * as Chart from 'chart.js';
import { DonutChartOption } from './donut-chart.model';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input('option') option: DonutChartOption;
  chartId = uuid.v4();
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var config: Chart.ChartConfiguration = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.option.items.map(e => e.value),
          backgroundColor: this.option.items.map(e => e.color),
          label: 'Dataset 1'
        }],
        labels: this.option.items.map(e => e.title)
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: this.option.title
        }
      }
    };

    // var config: Chart.ChartConfiguration = {
    //   type: 'doughnut',
    //   data: {
    //     datasets: [{
    //       data: [
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //         randomScalingFactor(),
    //       ],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(255, 159, 64)',
    //         'rgb(255, 205, 86)',
    //         'rgb(75, 192, 192)',
    //         'rgb(54, 162, 235)',
    //       ],
    //       label: 'Dataset 1'
    //     }],
    //     labels: [
    //       'Red',
    //       'Orange',
    //       'Yellow',
    //       'Green',
    //       'Blue'
    //     ]
    //   },
    //   options: {
    //     responsive: true,
    //     legend: {
    //       position: 'top',
    //     },
    //     title: {
    //       display: true,
    //       text: 'Chart.js Doughnut Chart'
    //     }
    //   }
    // };

    var ctx = (document.getElementById(this.chartId) as HTMLCanvasElement).getContext('2d');
    var a = new Chart(ctx, config);
  }
}


// red: 'rgb(255, 99, 132)',
// 	orange: 'rgb(255, 159, 64)',
// 	yellow: 'rgb(255, 205, 86)',
// 	green: 'rgb(75, 192, 192)',
// 	blue: 'rgb(54, 162, 235)',
// 	purple: 'rgb(153, 102, 255)',
// 	grey: 'rgb(201, 203, 207)'