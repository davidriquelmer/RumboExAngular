import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService} from "../../services/task.service";
import {Observable} from "rxjs/internal/Observable";
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import {now} from "moment";
import {TaskLogger} from "protractor/built/taskLogger";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public tasks: Task[];
  public task: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    // print elements fetched from request for testing purposes
    this.taskService.get_personal_tasks().subscribe(val => console.log(val))
    // let data = this.taskService.get_personal_tasks().subscribe((data: Task) => this.task = data)
    // console.log('data:')
    // console.log(data)

    $(function() {
      let containerEl: JQuery = $('#calendar');
      containerEl.fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        defaultDate: now(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        // events: this.tasks
    //     events: [
    //       {
    //         title: 'Clases de física',
    //         start: '2018-06-25',
    //       },
    //       {
    //         title: 'Conferencia de Python II',
    //         start: '2018-01-07',
    //         end: '2018-01-10'
    //       },
    //       {
    //         id: 999,
    //         title: 'Clases Calculo I',
    //         start: '2018-01-09T16:00:00'
    //       },
    //       {
    //         id: 999,
    //         title: 'Clases Calculo I',
    //         start: '2018-01-16T16:00:00'
    //       },
    //       {
    //         title: 'Taller de Redacción de Tesis en Ingles',
    //         start: '2018-01-11',
    //         end: '2018-01-13'
    //       },
    //       {
    //         title: 'Meeting',
    //         start: '2018-01-12T10:30:00',
    //         end: '2018-01-12T12:30:00'
    //       },
    //       {
    //         title: 'Lunch',
    //         start: '2018-01-12T12:00:00'
    //       },
    //       {
    //         title: 'Meeting',
    //         start: '2018-01-12T14:30:00'
    //       },
    //       {
    //         title: 'Happy Hour',
    //         start: '2018-01-12T17:30:00'
    //       },
    //       {
    //         title: 'Dinner',
    //         start: '2018-01-12T20:00:00'
    //       },
    //       {
    //         title: 'Hiking a Utuado',
    //         start: '2018-01-13T07:00:00'
    //       },
    //       {
    //         title: 'Realizar encuesta',
    //         url: 'http://google.com/',
    //         start: '2018-01-28'
    //       }
    // ]
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
