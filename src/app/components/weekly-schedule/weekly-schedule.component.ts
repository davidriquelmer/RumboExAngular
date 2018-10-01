import { Component, OnInit } from '@angular/core';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import {TaskService} from "../../services/task.service";

let now = new Date();

@Component({
  selector: 'app-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.css']
})

export class WeeklyScheduleComponent implements OnInit {

  current_user_id = sessionStorage.getItem('userid');

  studyTasks: Array<any> = [];
  personalTasks: Array<any> = [];
  courseTasks: Array<any> = [];

  events: Array<any> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.loadTasks();

  }

  loadTasks() {

    this.studyTasks = this.taskService.get_study_tasks(this.current_user_id);
    this.mapStudyTaskToCalendar();
    console.log('study tasks:', this.studyTasks);

    this.personalTasks = this.taskService.get_personal_tasks(this.current_user_id);
    this.mapPersonalTaskToCalendar();
    console.log('personal tasks:', this.personalTasks);

    this.courseTasks = this.taskService.get_course_tasks(this.current_user_id);
    this.mapCourseTaskToCalendar();
    console.log('course tasks:', this.courseTasks);

  }

  mapTasksToCalendar(task) {
    this.events.push({
      d: now,
      text: task.title,
      color: '#00aabb',
      description: task.description
      // console.log(typeof task.start);
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

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        display: 'inline',
        view: {
            eventList: { type: 'week' }
        }
    };
}
