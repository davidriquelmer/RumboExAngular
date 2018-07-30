import { Component, OnInit } from '@angular/core';
import {MbscEventcalendarOptions, mobiscroll} from '@mobiscroll/angular';
import {TaskService} from "../../services/task.service";

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

  constructor(private taskService: TaskService) { }

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

    // events: Array < any > = [{
    //     start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0),
    //     text: 'Product team mtg.',
    //     color: '#f67944'
    // }, {
    //     d: new Date(now.getFullYear(), now.getMonth(), 8, 8, 0),
    //     text: 'Green box to post office',
    //     color: '#6e7f29'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 8, 45),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 9, 0),
    //     text: 'Quick mtg. with Martin',
    //     color: '#de3d83'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 9, 30),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 10, 30),
    //     text: 'Product team mtg.',
    //     color: '#f67944'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 11, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 11, 30),
    //     text: 'Stakeholder mtg.',
    //     color: '#f67944'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 13, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
    //     text: 'Lunch @ Butcher\'s',
    //     color: '#00aabb'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 15, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 16, 0),
    //     text: 'General orientation',
    //     color: '#f67944'
    // }, {
    //     d: (now.getMonth() + 1) + '/14',
    //     text: 'Dexter BD',
    //     color: '#37bbe4'
    // }, {
    //     d: (now.getMonth() + 1) + '/5',
    //     text: 'Luke BD',
    //     color: '#37bbe4'
    // }, {
    //     d: 'w3',
    //     text: 'Employment (Semi-weekly)',
    //     color: '#635045'
    // }, {
    //     d: 'w5',
    //     text: 'Employment (Semi-weekly)',
    //     color: '#ff9966'
    // }, {
    //     start: new Date(now.getFullYear(), 1, 7),
    //     end: new Date(now.getFullYear(), 1, 25),
    //     text: 'Dean OFF',
    //     color: '#99ff33'
    // }, {
    //     start: new Date(now.getFullYear(), 2, 5),
    //     end: new Date(now.getFullYear(), 2, 14),
    //     text: 'Mike OFF',
    //     color: '#e7b300'
    // }, {
    //     start: new Date(now.getFullYear(), 4, 7),
    //     end: new Date(now.getFullYear(), 4, 16),
    //     text: 'John OFF',
    //     color: '#669900'
    // }, {
    //     start: new Date(now.getFullYear(), 5, 1),
    //     end: new Date(now.getFullYear(), 5, 11),
    //     text: 'Carol OFF',
    //     color: '#6699ff'
    // }, {
    //     start: new Date(now.getFullYear(), 6, 2),
    //     end: new Date(now.getFullYear(), 6, 17),
    //     text: 'Jason OFF',
    //     color: '#cc9900'
    // }, {
    //     start: new Date(now.getFullYear(), 7, 6),
    //     end: new Date(now.getFullYear(), 7, 14),
    //     text: 'Ashley OFF',
    //     color: '#339966'
    // }, {
    //     start: new Date(now.getFullYear(), 8, 10),
    //     end: new Date(now.getFullYear(), 8, 20),
    //     text: 'Marisol OFF',
    //     color: '#8701a9'
    // }, {
    //     start: new Date(now.getFullYear(), 9, 1),
    //     end: new Date(now.getFullYear(), 9, 12),
    //     text: 'Sharon OFF',
    //     color: '#cc6699'
    // }, {
    //     d: '12/25',
    //     text: 'Christmas Day',
    //     color: '#ff0066'
    // }, {
    //     d: '1/1',
    //     text: 'New Year\'s day',
    //     color: '#99ccff'
    // }, {
    //     d: '4/1',
    //     text: 'April Fool\'s Day',
    //     color: '#ff6666'
    // }, {
    //     d: '11/2',
    //     text: 'File Form 720 for the third quarter',
    //     color: '#a63e14'
    // }, {
    //     d: '11/2',
    //     text: 'File Form 730 and pay tax on wagers accepted during September',
    //     color: '#a63e14'
    // }, {
    //     d: '11/2',
    //     text: 'File Form 2290 and pay the tax for vehicles first used during September',
    //     color: '#a63e14'
    // }, {
    //     d: '11/2',
    //     text: 'File Form 941 for the third quarter',
    //     color: '#a63e14'
    // }, {
    //     d: '11/2',
    //     text: 'Deposit FUTA owed through Sep if more than $500',
    //     color: '#a63e14'
    // }, {
    //     d: '11/30',
    //     text: 'Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies',
    //     color: '#a63e14'
    // }, {
    //     d: '11/30',
    //     text: 'File Form 730 and pay tax on wagers accepted during October',
    //     color: '#a63e14'
    // }, {
    //     d: '11/30',
    //     text: 'File Form 2290 and pay the tax for vehicles first used during October',
    //     color: '#a63e14'
    // }];

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        display: 'inline',
        view: {
          calendar: { type: 'week' },
          eventList: { type: 'day' }
        }
    };
}
