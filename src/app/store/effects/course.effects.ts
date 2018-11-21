///<reference path="../../models/course.ts"/>
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";
import {CourseService} from "../../services/course.service";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Action} from "@ngrx/store";
import * as courseActions from "../actions/course.actions";
import {Course, Grade, Status} from "../../models/course";


@Injectable()
export class CourseEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private courseService: CourseService) {}


  @Effect()
  loadStudent$: Observable<Action> = this.courseService.get_courses(sessionStorage.getItem('userid'))
    .pipe(map(course => {
      console.log(course);
      return handleCourse(course);
    }))

}

function handleCourse(c: any[]): Action {
  let courses: Course[] = [];
  for(let i=0; i<c.length; i++) {
    console.log(c[i].codification);
      let grades = this.getGrades(c[i].codification);
      console.log(grades);
      let avg = this.getCumAvg(grades);
      let status = this.setStatus(avg);
      let course: Course = {
        codification: c[i].codification,
        name: c[i].course_name,
        professor_id: c[i].professor_id,
        section: c[i].section,
        grades: grades,
        cumulative_average: avg,
        general_average: avg,
        status: status,
        tasks: []
      };
      courses.push(course);
    console.log(course);
  }
  console.log(courses);
  return new courseActions.SetCourses(courses);
}

function getGrades(course_id: number): Grade[] {
  console.log('aqui llega');
  this.courseService.get_grades_by_course_id(course_id)
    .pipe(map(grade => {
      return grade;
    }));
  return;
}

function getCumAvg(grades: Grade[]): number {
  let progress = 0;
    for(let i = 0; i < this.grades.length; i++) {
      let g = grades[i];
      progress += g['grade'] / g['total'] * g['weight'];
    }
    return progress;
}

function setStatus(avg: number): Status {
  if(avg > 90)
    return Status.Excellent;
  else if(avg > 85)
    return Status.Passing;
  else if(avg > 70)
    return Status.Surviving;
  else
    return Status.NotPassing;
}
