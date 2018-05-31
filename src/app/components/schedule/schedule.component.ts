import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      let containerEl: JQuery = $('#calendar');
      containerEl.fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: '2018-01-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'Clases de física',
            start: '2018-01-01',
          },
          {
            title: 'Conferencia de Python II',
            start: '2018-01-07',
            end: '2018-01-10'
          },
          {
            id: 999,
            title: 'Clases Calculo I',
            start: '2018-01-09T16:00:00'
          },
          {
            id: 999,
            title: 'Clases Calculo I',
            start: '2018-01-16T16:00:00'
          },
          {
            title: 'Taller de Redacción de Tesis en Ingles',
            start: '2018-01-11',
            end: '2018-01-13'
          },
          {
            title: 'Meeting',
            start: '2018-01-12T10:30:00',
            end: '2018-01-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2018-01-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2018-01-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2018-01-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2018-01-12T20:00:00'
          },
          {
            title: 'Hiking a Utuado',
            start: '2018-01-13T07:00:00'
          },
          {
            title: 'Realizar encuesta',
            url: 'http://google.com/',
            start: '2018-01-28'
          }
    ]
      });
    });
    $(function() {
      let containerEl: JQuery = $('#calendar2');
      containerEl.fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          center: 'month,timelineFourDays'
        },
        views: {
          timelineFourDays: {
            type: 'timeline',
            duration: { days: 4 }
          }
        }
      });
    });
  }

}
