import * as $ from 'jquery';
import 'fullcalendar';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as uuid from 'uuid';
import { TooltipInfo, ScheduleOption } from './schedule.model';
import { Moment } from 'moment';
import { EventObjectInput } from 'fullcalendar';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Output() onClickEvent: EventEmitter<EventObjectInput>
  control: JQuery<HTMLElement>;
  controlId: String;

  tooltip: JQuery<HTMLElement>;
  tooltipId: String;

  tooltipInfo: TooltipInfo = new TooltipInfo;

  constructor() {
    this.controlId = uuid.v4();
    this.tooltipId = uuid.v4();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.control = $(`#${this.controlId}`);
    this.tooltip = $(`#${this.tooltipId}`);
    $('body').append(this.tooltip);
    
  }
  draw(option: ScheduleOption){
    let that = this;
    this.control.fullCalendar({
      defaultView: 'agendaWeek',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek, agendaDay'
      },

      events: option.events,
      // events: [
      //   {
      //     id: "aa",
      //     title: "Event a",
      //     start: "2018-03-25T09:00",
      //     end: "2018-03-25T12:00"
      //   },
      //   {
      //     id: "bb",
      //     title: "Event b",
      //     start: "2018-03-25T01:00",
      //     end: "2018-03-25T03:00"
      //   }
      // ],

      buttonText: {
        today: "Hôm nay",
        month: "Tháng",
        week: "Tuần",
        year: "Năm",
        day: "Ngày",
      },

      eventClick: function (event, jsevent, view)  {
        this.onClickEvent.emit(event);
        alert(event.id);
        alert(event.title);
      },
      eventMouseover: function  (event, jsevent, view)  {
        that.tooltip.css('top', jsevent.clientY + 10);
        that.tooltip.css('left', jsevent.clientX - 130);
        debugger;
        that.tooltipInfo.title = event.title;
        // that.tooltipInfo.start = event.start.toString();
        that.tooltipInfo.start = that.momentToString(event.start as Moment);
        that.tooltipInfo.end = that.momentToString(event.end as Moment);
        // that.tooltipInfo.end = event.end.toString();
        that.tooltipInfo.items = [
          {
            title: 'Title 1',
            detail: 'Detail 1'
          },
          {
            title: 'Title 2',
            detail: 'Detail 2'
          },
          {
            title: 'Title 3',
            detail: 'Detail 3'
          }
        ]
        $(this).mousemove(function(handler){
          that.tooltip.css('top',handler.clientY + 10);
          that.tooltip.css('left',handler.clientX - 130);
        })
        that.tooltip.fadeIn('fast');
      },
      eventMouseout: function (event, jsevent, view)  {
        $(this).off('mousemove');
        that.tooltip.fadeOut('fast');
      }
    })
  }

  momentToString(moment: Moment){
    return `${moment.hour()}:${moment.minute()}`;
  }
}