import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleComponent } from '../../controls/schedule/schedule.component';
import { ScheduleOption } from '../../controls/schedule/schedule.model';

@Component({
  selector: 'app-demo-schedule',
  templateUrl: './demo-schedule.component.html',
  styleUrls: ['./demo-schedule.component.css']
})
export class DemoScheduleComponent implements OnInit {
@ViewChild('scheduleControl') scheduleControl: ScheduleComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let option = new ScheduleOption();
    option.events =[
        {
          id: "aa",
          title: "Event a",
          start: "2018-03-25T09:00",
          end: "2018-03-25T12:00"
        },
        {
          id: "bb",
          title: "Event b",
          start: "2018-03-25T01:00",
          end: "2018-03-25T03:00"
        }
      ],
    this.scheduleControl.draw(option);
  }
}
