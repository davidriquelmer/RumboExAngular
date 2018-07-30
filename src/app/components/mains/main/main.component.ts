import { Component } from '@angular/core';
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  courses: Array<any>;

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {

    let curr_user_id = sessionStorage.getItem('userid');

    this.courseService.get_courses(curr_user_id).subscribe(data => {
      this.courses = data;
      console.log('courses:', this.courses);
    });

  }

}
