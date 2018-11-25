import { Component } from '@angular/core';
import {CourseService} from "../../../services/course.service";

import {Store} from "@ngrx/store";
import * as fromRoot from '../../../store/reducers';

@Component({
  selector: 'app-studentmain',
  templateUrl: './studentmain.component.html',
  styleUrls: ['./studentmain.component.css']
})
export class StudentmainComponent {

  student: any;
  courses: Array<any>;
  tasks: any;

  constructor(private courseService: CourseService,
              private store: Store<fromRoot.State>) {

  }

  ngOnInit() {

    // this.courseService.get_courses(this.user.id).subscribe(data => {
    //   this.courses = data;
    //   console.log('courses:', this.courses);
    // });

    this.store.select('student').subscribe(data => {
      this.student = data.user;
    });
    this.store.select('course').subscribe(data => {
      this.courses = data.courses;
    });
    this.store.select('task').subscribe(data => {
      this.tasks = data.tasks;
    });
  }

}
