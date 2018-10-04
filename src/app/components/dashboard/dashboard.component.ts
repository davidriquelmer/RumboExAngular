import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";
import {GooglechartService} from "../../services/googlechart.service";
import {config} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  curr_student_id = sessionStorage.getItem('userid');

  courses = [];

  google: any;

  constructor(private courseService: CourseService,
              private chartService: GooglechartService) {
  }

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

    let data1 = [
      ['Task', 'Hours per Day'],
      ['Personal', 3],
      ['Data Bases', 2],
      ['Big Data', 5],
      ['Course', 4],
      ['Sleep', 10]
    ];

    let config1 = {'pieHole': 0.4, 'chartArea.top': 0};
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
