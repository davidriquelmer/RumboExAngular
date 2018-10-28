import { Component } from '@angular/core';
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  courses: Array<any>;

  user = {
    'id': sessionStorage.getItem('userid'),
    'name': sessionStorage.getItem('username')
  };

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {

    this.courseService.get_courses(this.user.id).subscribe(data => {
      this.courses = data;
      console.log('courses:', this.courses);
    });

  }

}
