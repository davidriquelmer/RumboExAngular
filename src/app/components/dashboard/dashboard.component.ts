import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";
import {GooglechartService} from "../../services/googlechart.service";
import {config} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

// declare var google: any;

export class DashboardComponent implements OnInit {

  curr_student_id = sessionStorage.getItem('userid');

  courses = [];

  google: any;

  constructor(private courseService: CourseService,
              private chartService: GooglechartService) {
    // this.google.charts.load('current', {'packages':['corechart']});
    // this.google.charts.setOnLoadCallback(this.drawChart);
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

    // let data1 = [['Task', 'Hours per Day'],
    //   ['Eat',      3],
    //   ['Commute',  2],
    //   ['Watch TV', 5],
    //   ['Video games', 4],
    //   ['Sleep',    10]];
    //
    // let config1 = {'title': 'My Daily Activities at 20 years old', 'pieHole': 0.4};
    // let elementId1 = 'donutchart';
    // this.chartService.buildPieChart(elementId1, data1, config1);
  }

  // drawChart() {
  //
  //   let data = this.google.visualization.arrayToDataTable([
  //     ['Effort', 'Amount given'],
  //     ['My all',     100],
  //   ]);
  //
  //   let options = {
  //     pieHole: 0.5,
  //     pieSliceTextStyle: {
  //       color: 'black',
  //     },
  //     legend: 'none'
  //   };
  //
  //   let chart = new this.google.visualization.PieChart(document.getElementById('donut_single'));
  //   chart.draw(data, options);
  // }

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
