import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from "@angular/common/http";
import * as studentActions from '../actions/student.actions'
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {Student} from "../../models/student";
import {Action} from "@ngrx/store";
import {StudentService} from "../../services/student.service";


@Injectable()
export class StudentEffects {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private studentService: StudentService) {}

  @Effect()
  loadStudent$: Observable<Action> =
    // this.studentService.getStudent(sessionStorage.getItem('userid'))
    // .pipe(map(user => {
    //   return new studentActions.SetStudent(user);
    // }))
    this.actions$.pipe(
    ofType(studentActions.StudentActionTypes.LoadStudent),
    switchMap(() => {
      return this.studentService.getStudent(sessionStorage.getItem('userid'))
        .pipe(
          map((user) => {
            return new studentActions.SetStudent(user);
          })
        )
    })
  )
}
