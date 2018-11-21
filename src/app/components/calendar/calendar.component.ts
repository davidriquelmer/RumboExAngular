import { Component, OnInit } from '@angular/core';
import {MbscEventcalendarOptions, mobiscroll} from '@mobiscroll/angular';
import { TaskService } from "../../services/task.service";
import {PopoverComponent} from "../popover/popover.component";

import {Observable} from "rxjs";
import {Store, State} from '@ngrx/store';
import {Student} from "../../models/student";
import {AppState} from "../../app.state";
import * as StudentActions from '../../store2/actions/student.action';

// mobiscroll.settings = {
//     theme: 'web'
// };

var now = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

  current_user_id = sessionStorage.getItem('userid');

  student: Observable<any>;

  studyTasks: any = [];
  personalTasks: any = [];
  courseTasks: any = [];

  labelDays: Array<any> = [];

  showModal: Boolean = false;

  constructor(private taskService: TaskService,
              private store: Store<AppState>) {
    this.student = store.select('student');
    this.student.subscribe(data => {
      this.studyTasks = data.tasks.study;
      this.personalTasks = data.tasks.personal;
      this.mapPersonalTaskToCalendar();
      this.mapStudyTaskToCalendar();
    })
  }


  ngOnInit() {

    // this.loadTasks();
    // this.addPersonalTask();

    $("button").click(function(){
      this.showModal = true;
      console.log(this.showModal);
    })

  }

  loadTasks() {

    this.taskService.get_study_tasks(this.current_user_id).subscribe(data => {
      this.studyTasks = data;
      this.mapStudyTaskToCalendar();
      console.log('study tasks:', this.studyTasks)
    });

    this.taskService.get_personal_tasks(this.current_user_id).subscribe(data => {
      this.personalTasks = data;
      this.mapPersonalTaskToCalendar();
      console.log('personal tasks:', this.personalTasks)
    });

    this.taskService.get_course_tasks(this.current_user_id).subscribe(data => {
      this.courseTasks = data;
      this.mapCourseTaskToCalendar();
      console.log('course tasks:', this.courseTasks)
    });

  }

  mapTasksToCalendar(task) {
    this.labelDays.push({
      d: now,
      text: task.title,
      color: '#00aabb',
      description: task.description
    });
  }

  mapStudyTaskToCalendar() {
    for(let task of this.studyTasks) {
      this.mapTasksToCalendar(task);
    }
  }

  mapPersonalTaskToCalendar() {
    for(let task of this.personalTasks) {
      this.mapTasksToCalendar(task);
    }
  }

  mapCourseTaskToCalendar() {
    for(let task of this.courseTasks) {
      this.mapTasksToCalendar(task);
    }
  }

  addPersonalTask() {
    this.taskService.insert_personal_task(
      this.current_user_id,
      {
        title: 'eat',
        description: 'because im hungry',
        start: 7,
        end: 8,
        finished: false
      }
    );
  }

  eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        view: {
          calendar: { type: 'month', popover: true }
        }
    };

}

