import {Component, Inject, OnInit} from '@angular/core';
import {MbscEventcalendarOptions, mobiscroll} from '@mobiscroll/angular';
import {TaskService} from "../../services/task.service";
// import {NewCourseTaskForm} from "../individual-course/individual-course.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Task} from "../../models/task";
import {NewCourseTaskForm} from "../individual-course/individual-course.component";

let now = new Date();

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})

export class DailyScheduleComponent  implements OnInit {

  current_user_id = sessionStorage.getItem('userid');

  studyTasks: any = [];
  personalTasks: any = [];
  courseTasks: any = [];

  events: Array<any> = [];

  constructor(private taskService: TaskService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.loadTasks();

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
    this.events.push({
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

  openForm() {
    console.log('opened');
    const dialogRef = this.dialog.open(NewTaskForm, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.createTask(result);
    });
  }

  createTask(data) {
    console.log('data:', data);
    var title = data['title'];
    var description = data['description'];
    var start = data['start'];
    var end = data['end'];
    var task = new Task(title, description, start, end, false);
    console.log(task);
    this.events.push({
      d: now,
      text: title,
      color: '#00aabb',
      description: description
    });
  }

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        display: 'inline',
        view: {
          calendar: { type: 'week' },
          eventList: { type: 'day' }
        }
    };
}

@Component({
  selector: 'new-task-form',
  templateUrl: 'new-task-form.component.html'
})
export class NewTaskForm {

  constructor(public dialogRef: MatDialogRef<NewTaskForm>,
              private taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data){}

}
