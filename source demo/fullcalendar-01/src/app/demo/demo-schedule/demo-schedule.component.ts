import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleControlComponent } from '../../controls/schedule-control/schedule-control.component';
import { ScheduleOption } from '../../controls/schedule-control/schedule-control.model';

@Component({
  selector: 'app-demo-schedule',
  templateUrl: './demo-schedule.component.html',
  styleUrls: ['./demo-schedule.component.css']
})
export class DemoScheduleComponent implements OnInit {
  @ViewChild('scheduleControl') scheduleControl: ScheduleControlComponent;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let option = new ScheduleOption();
    option.events = [
      {
        id: 'aa',
        title: 'Event A',
        start: '2018-03-25T09:00',
        end: '2018-03-25T12:00'
      },
      {
        id: 'bb',
        title: 'Event B',
        start: '2018-03-25T01:00',
        end: '2018-03-25T03:00'
      }
    ];
    this.scheduleControl.draw(option);
  }
}
