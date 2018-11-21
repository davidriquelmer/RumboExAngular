import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Action} from "rxjs/internal/scheduler/Action";
import {map, switchMap} from "rxjs/operators";
import * as StudentActions from "../actions/student.action";
import {Student} from '../../models/student';
import {StudentService} from "../../services/student.service";
import {TaskService} from '../../services/task.service';

let usr_id = sessionStorage.getItem('userid');

@Injectable()
export class StudentEffect {

  constructor(private actions$: Actions,
              private http: HttpClient,
              private studentService: StudentService,
              private taskService: TaskService) {}

  @Effect()
  loadStudent$ = function () {
    console.log('loading.................');
    let student = this.studentService.getStudent(usr_id);
    if(student==null || student==undefined){
      console.log('esto se jodio');
    }
    else {
      console.log('esto no se jodio');
    }
      student.subscribe(user => {
        new StudentActions.SetStudent(user);
        console.log('vamos pa la playa');
        console.log(user);
      })
    //     .pipe(
    //   map(user => new StudentActions.SetStudent(user))
    // );
  };



  // loadStudyTasks() : void {
  //   this.taskService.get_study_tasks(usr_id).pipe(
  //     map(tasks => new StudentActions.)
  //   )
  // };



  //   this.http.get<any>(url).pipe(map((user) => {
  //     console.log('ok');
  //     console.log(user.User);
  //   //   let student : Student = {
  //   //     user_id: user.user_id,
  //   //     username: user.username,
  //   //     email: user.email,
  //   //     password: user.password,
  //   //     name: user.name,
  //   //     lastname: user.lastname,
  //   //     department_name: user.department_name,
  //   //     department_num: user.department_num,
  //   //     enrolled_program: user.enrolled_program,
  //   //     program_name: user.program_name,
  //   //     student_num: user.student_num,
  //   // };
  //   //   console.log(student);
  //     return new StudentActions.SetStudent(user.User);
  // }));
  //   this.actions$.pipe(
  //   ofType(StudentActions.LOAD_STUDENT),
  //   switchMap(() => {
  //     console.log(url);
  //     return this.http.get<Student>(url)
  //       .pipe(
  //         map((user) => {
  //           console.log('user:');
  //           console.log(user);
  //           return new StudentActions.SetStudent(user);
  //         })
  //       )
  //   })
  // );
}
