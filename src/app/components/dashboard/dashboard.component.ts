import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  curr_student_id = sessionStorage.getItem('userid');

  courses = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
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
  }

  getGrade(course_id) {
    // let grades: Array<any>;
    // this.courseService.get_grades_by_course_id(course_id).subscribe(data => {
    //   grades = data;
    // });
    // let final_grade = 0;
    // console.log(grades, grades.length);
    // for(let i = 0; i < 0; i++) {
    //   let g = grades[i];
    //   final_grade += g['grade'] / g['total'] * g['weight'];
    // }
    // console.log(course_id, grades.length, final_grade);
    // return final_grade;
    return 0;
  }

  getStatus(grade) {
    if(grade > 85) {
      return 'PASSING';
    }
    else if(grade > 70) {
      return 'SURVIVING';
    }
    else {
      return 'NOT PASSING';
    }
  }

}
