import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit {

  curr_student_id: any = sessionStorage.getItem('userid');

  curr_course_id;

  course;

  undoneTasks = [];
  doneTasks = [];

  grades: Array<any>;
  progress;

  sub;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.curr_course_id = params['course'];
      });

    this.courseService.get_course(this.curr_course_id).subscribe(data => {
      this.course = data;
      console.log('course:', this.course);
    });

    this.taskService.get_study_tasks_by_course(this.curr_student_id, this.curr_course_id).subscribe(data => {
      data.map(task => {
          if (task['finished'] == false) {
            this.undoneTasks.push(task);
          }
          else {
            this.doneTasks.push(task);
          }
        }
      )
      console.log('tasks:', this.undoneTasks, this.doneTasks);
    });

    this.get_total_grade();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get_total_grade() {
    for(let i = 0; i < this.grades.length; i++) {
      this.progress += this.grades[i]['grade'] * this.grades[i]['weight'] / 100;
    }
  }

}
