import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService} from "../../services/task.service";
import {PopoverService} from '../../services/popover.service';
import {ModalService} from "../../services/modal.service";
import {PopoverComponent} from "../popover/popover.component";
import {AuthService} from "../../services/auth.service";
import * as $ from 'jquery';
import PopperJs from 'popper.js';
import 'jqueryui';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import {now} from "moment";
import {TaskLogger} from "protractor/built/taskLogger";
import {p, renderComponent} from "@angular/core/src/render3";
import Popper from "popper.js";
import {renderTemplate} from "@angular/core/src/render3/instructions";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {


  constructor(private taskService: TaskService,
              private popoverService: PopoverService,
              private modal: ModalService) {}


  ngOnInit() {

    this.showNewEventModal();
    var curr_user_id = sessionStorage.getItem('userid');

    // Trying to fetch tasks from Service pero no me sale :(

    var modal = this.modal;
    var study_tasks = [];
    var course_tasks = [];


    $(function () {
      let containerEl: JQuery = $('#calendar');
      containerEl.fullCalendar({
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        header: {
          left: 'prev,next today addEventButton',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
        },
        // customButtons: {
        //     addEventButton: {
        //       text: 'new task',
        //
        //
        //     click: function () {
        //         this.showNewEventModal();
        //     }
        //   }
        // },
        defaultDate: now(),
        navLinks: true, // can click day/week names to navigate views
        editable: false, // cannot move an event to another date
        eventLimit: true, // allow "more" link when too many events
        eventSources: [
          {
            // events: this.tasks['personal'],
            url: "http://localhost:5000/task/personal/" + curr_user_id,
            color: "blue"
          },
          {
            url: "http://localhost:5000/task/course/" + curr_user_id,
            color: "red"
          },
          {
            url: "http://localhost:5000/task/study/" + curr_user_id,
            color: "green"
          }
        ],
        eventTextColor:"white",

        eventClick: function(event, jsEvent, view) {
          this.renderPopover(event, jsEvent, view);

        },
        eventRender: function(eventObj, $el) {

        }
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

  renderPopover(event, jsEvent, view): void {
      // console.log(this.popoverService);
      if(this.popoverService.is_open()){
        alert('popover is already open');
        this.popoverService.show_popover(event);
      }
      else {
        this.popoverService.show_popover(event);

      }
    }

  showNewEventModal() {
    console.log(this.modal);
    this.modal.open();

  }

}
