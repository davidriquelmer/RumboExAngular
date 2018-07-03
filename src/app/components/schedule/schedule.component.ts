import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService} from "../../services/task.service";
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import {now} from "moment";
import {TaskLogger} from "protractor/built/taskLogger";
import {p} from "@angular/core/src/render3";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  ngOnInit() {


    var popTemplate = [
    '<div class="popover" style="max-width:600px;" >',
    '<div class="arrow"></div>',
    '<div class="popover-header">',
    '<button id="closepopover" type="button" class="close" aria-hidden="true">&times;</button>',
    '<h3 class="popover-title"></h3>',
    '</div>',
    '<div class="popover-content"></div>',
    '</div>'].join('');


    // Trying to fetch tasks from Service pero no me sale :(
    var personal_tasks;
    this.taskService.get_personal_tasks().subscribe(tasks => personal_tasks = tasks);
    console.log(personal_tasks);


    $(function() {
      let containerEl: JQuery = $('#calendar');
      containerEl.fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'addEventButton month,agendaWeek,agendaDay,listWeek'
        },
        customButtons: {
          addEventButton: {
            text: 'new task',
            click: function () {

              var dateStr = prompt('Enter a date in YYYY-MM-DD format');
              // var date = moment(dateStr);

              // if (date.isValid()) {
              //   $('#calendar').fullCalendar('renderEvent', {
              //     title: 'dynamic event',
              //     start: date,
              //     allDay: true
              //   });
              //   alert('Great. Now, update your database...');
              // } else {
              //   alert('Invalid date.');
              // }
            }
          }
        },
        defaultDate: 'Thu, 28 Jun 2018 13:30:00 GMT', // cambiar a now() cuando termine de test
        navLinks: true, // can click day/week names to navigate views
        editable: false, // cannot move an event to another date
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
        ],

        select: function (start, end, jsEvent) {
          closePopovers();
          popoverElement = $(jsEvent.target);
          $(jsEvent.target).popover({
              title: 'the title',
              content: function () {
                  return $("#popoverContent").html();
              },
              template: popTemplate,
              placement: 'left',
              html: true,
              trigger: 'click',
              animation: true,
              container: 'body'
          }).popover('show');
        },

        eventClick: function (calEvent, jsEvent, view) {
        //closePopovers();
          popoverElement = $(jsEvent.currentTarget);
        },

        //esta funcion hace que los eventos se borren

        // eventRender: function (event, element) {
        //   element.popover({
        //     title: 'the title',
        //     content: function () {
        //         return $("#popoverContent").html();
        //     },
        //     template: popTemplate,
        //     placement: 'left',
        //     html: true,
        //     trigger: 'click',
        //     animation: true,
        //     container: 'body'
        //   });
        // },
      });
    });

    var popoverElement;

    function closePopovers() {
        $('.popover').not(this).popover('hide');
    }

    $('body').on('click', function (e) {
      // close the popover if: click outside of the popover || click on the close button of the popover
      if (popoverElement && ((!popoverElement.is(e.target) && popoverElement.has(e.target).length === 0 && $('.popover').has(e.target).length === 0) || (popoverElement.has(e.target) && e.target.id === 'closepopover'))) {

          ///$('.popover').popover('hide'); --> works
          closePopovers();
      }
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
