import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  curr_student_id = sessionStorage.getItem('userid');

  courses;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.get_courses(this.curr_student_id).subscribe(data => {
      this.courses = data;
      console.log('course:', this.courses);
    });
  }

}
