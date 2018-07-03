import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService} from "../../services/task.service";
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
        eventSources: [
          {
            url: "http://localhost:5000/task/personal/802364584",
            color: "blue"
          },
          {
            url: "http://localhost:5000/task/course/802364584",
            color: "red"
          },
          {
            url: "http://localhost:5000/task/study/802364584",
            color: "green"
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
