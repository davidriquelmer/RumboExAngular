import { Component, OnInit } from '@angular/core';
import {MbscEventcalendarOptions, mobiscroll} from '@mobiscroll/angular';
import { TaskService } from "../../services/task.service";
import {PopoverComponent} from "../popover/popover.component";

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

  studyTasks: any = [];
  personalTasks: any = [];
  courseTasks: any = [];

  labelDays: Array<any> = [];

  showModal: Boolean = false;

  constructor(private taskService: TaskService) {}


  ngOnInit() {

    this.loadTasks();
    this.addPersonalTask();

    $("button").click(function(){
      this.showModal = true;
      console.log(this.showModal);
    })

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
    this.labelDays.push({
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

  addPersonalTask() {
    this.taskService.insert_personal_task(
      this.current_user_id,
      {
        title: 'eat',
        description: 'because im hungry',
        start: now,
        end: now,
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

