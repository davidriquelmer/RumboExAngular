import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Task} from "../../models/task";
import {TaskService} from "../../services/task.service";
import {CourseService} from "../../services/course.service";
import {GooglechartService} from "../../services/googlechart.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
// this whole code is so messy and ugly
// i will find the time to clean it... i promise :)
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
              private courseService: CourseService,
              private chartService: GooglechartService,
              public dialog: MatDialog) { }

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

    this.courseService.get_grades_by_course_id(this.curr_course_id).subscribe(data => {
      this.grades = data;
      console.log('grades:', this.grades);
      this.get_total_grade();
      this.buildGauge();
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
      );
      console.log('tasks:', this.undoneTasks, this.doneTasks);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  buildGauge() {
    let data = [
      ['Label', 'Value'],
      ['Current Grade', this.progress],
      //this is hardcoded
      ['Projected Grade', 80]
    ];
    let options = {
      // width: 400, height: 120,
      // animation.duration: 1000,
      redFrom: 0, redTo: 50,
      yellowFrom:50, yellowTo: 70,
      majorTicks: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
      minorTicks: 2
    };
    this.chartService.buildGauge('gauge', data, options);
  }

  get_total_grade() {
    this.progress = 0;
    for(let i = 0; i < this.grades.length; i++) {
      let g = this.grades[i];
      this.progress += g['grade'] / g['total'] * g['weight'];
    }
    console.log('progress:', this.progress);
  }

  openForm() {
    console.log('opened');
    const dialogRef = this.dialog.open(NewCourseTaskForm,{
      data: {course: this.course.course_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.createTask(result);
    });
  }

  createTask(data) {
    console.log('data:', data);
    var title = data['title'];
    var description = data['description'];
    var start = data['start'];
    var end = data['end'];
    var task = new Task(title, description, start, end, false);
    console.log(task);
    this.taskService.insert_study_task(data, this.curr_student_id, this.curr_course_id);
  }

}

@Component({
  selector: 'new-course-task-form',
  templateUrl: 'new-course-task-form.component.html'
})
export class NewCourseTaskForm {

  constructor(public dialogRef: MatDialogRef<NewCourseTaskForm>,
              private taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data){}

}
