import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import {GooglechartService} from '../../services/googlechart.service';
// import {TaskCountService} from '../../services/task-count.service';
import {config} from 'rxjs';
import {nextMonthDisabled} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  curr_student_id = sessionStorage.getItem('userid');

  courses = [];

  google: any;
  personalTask = [];
  courseTask = [];
  appointmentTask = [];
  studyTask = [];

  constructor(private courseService: CourseService,
              private chartService: GooglechartService  ){
              // private taskCountService: TaskCountService) {
  }
// getChartValues() {
//        this.taskCountService.get_apppointment_tasks_count(this.curr_student_id).subscribe(data => {
//       this.appointmentTask = data;
//       console.log('count of appointment tasks:', this.appointmentTask[0][0]);
//     });
//     this.taskCountService.get_personal_tasks_count(this.curr_student_id).subscribe(data => {
//       this.personalTask = data;
//       console.log('count of personal tasks:', this.personalTask[0][0]);
//     });
//     this.taskCountService.get_study_tasks_count(this.curr_student_id).subscribe(data => {
//       this.studyTask = data;
//       console.log('count of study tasks:', this.studyTask[0][0]);
//       });
//     this.taskCountService.get_course_tasks_count(this.curr_student_id).subscribe( data => {
//       this.courseTask = data;
//       console.log('count of course tasks:', this.courseTask[0][0]);
//       });
//   }
  ngOnInit() {
    // this.getChartValues();
    this.courseService.get_courses(this.curr_student_id).subscribe(data => {
      data.map(course => {
        this.courses.push({
          'name': course.course_name,
          'grade': this.getGrade(course.codification),
          'status': this.getStatus(this.getGrade(course.codification))
        });
      });
      console.log('course:', this.courses);
    });
    let data1 = [
      ['Task', 'Hours per Day'],
      // fix this
      // ['Personal', this.personalTask[0][0]],
      // ['Courses' , this.courseTask[0][0]],
      // ['Appointments', this.appointmentTask[0][0]],
      // ['Study', this.studyTask[0][0]],
      ['Personal', 2],
      ['Courses', 4],
      ['Appointments', 1],
      ['Study', 3]
    ];

    let config1 = {'pieHole': 0.4};
    let elementId1 = 'donutchart';
    this.chartService.buildPieChart(elementId1, data1, config1);

  }
  // get the current grade of a course
  getGrade(course_id) {
    // this code is so ugly... i will clean it later
    let grades: Array<any>;
    this.courseService.get_grades_by_course_id(course_id).subscribe(data => {
      console.log(data);
      grades = data;
    });
    let final_grade = 0;
    if(grades != null) {
      console.log(grades, grades.length);
      for (let i = 0; i < grades.length; i++) {
        let g = grades[i];
        final_grade += g['grade'] / g['total'] * g['weight'];
      }
      console.log(course_id, grades.length, final_grade);
    }
    return final_grade;
  }

  // get the status of a course by grade
  // the grade range should be determined later by counselors (we need to ask this)
  // this code will be fixed later on
  getStatus(grade) {
    if (grade > 85) {
      return 'PASSING';
    }
    else if (grade > 70) {
      return 'SURVIVING';
    }
    else {
      return 'NOT PASSING';
    }
  }

}
