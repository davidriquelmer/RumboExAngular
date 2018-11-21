import { Action } from '@ngrx/store';
import {Course} from "../../models/course";

export enum CourseActionTypes {
  LoadCourses = '[Course] Load',
  SetCourses = '[Course] Set'
}

export class LoadCourses implements Action {
  readonly type = CourseActionTypes.LoadCourses;
}

export class SetCourses implements Action {
  readonly type = CourseActionTypes.SetCourses;

  constructor(public payload: Course[]) {}
}

export type CourseActions = LoadCourses | SetCourses;
