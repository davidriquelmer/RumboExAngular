import { Component, OnInit } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';
import { TaskService } from "../../services/task.service";

mobiscroll.settings = {
    theme: 'web'
};

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

  constructor(private taskService: TaskService) {}


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

  // addPersonalTask() {
  //   this.taskProvider.addPersonalTask(
  //     'eat',
  //     'because im hungry',
  //     now,
  //     now
  //   );
  // }


}

