import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";
import {Action} from "@ngrx/store";
import * as taskActions from "../actions/task.actions";
import {TaskService} from "../../services/task.service";
import {Task} from '../../models/task';


@Injectable()
export class TaskEffects {

  usr_id = sessionStorage.getItem('userid');

  constructor(private actions$: Actions,
              private http: HttpClient,
              private taskService: TaskService) {}

  // @Effect()
  // loadTask$() = function(): Observable<Action> {
    // this.taskService.(sessionStorage.getItem('userid'))
    //   .pipe(map(user => {
    //     return new studentActions.SetStudent(user);
    //   }));
    // return new taskActions.SetTasks(null);
  // }
  @Effect()
  loadTasks$ : Observable<Action> = this.actions$.pipe(
    ofType(taskActions.TaskActionTypes.LoadTasks),
    switchMap(() => {
      let task: {course: Task[], study: Task[], appointment: Task[], personal: Task[]};
      this.taskService.get_course_tasks(this.usr_id).subscribe((data) => {
        task.course = data;
      });
      this.taskService.get_study_tasks(this.usr_id);
      this.taskService.get_personal_tasks(this.usr_id);
      return this.taskService.get_all().pipe(
        map((tasks) => {
          return new taskActions.SetTasks(task);
        })
      )
      // return new taskActions.SetTasks(null);
    })
  )
}
