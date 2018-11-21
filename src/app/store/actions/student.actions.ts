import { Action } from '@ngrx/store';
import {Student} from "../../models/student";

export enum StudentActionTypes {
  LoadStudent = '[Student] Load Student',
  SetStudent = '[Student] Set Student'
}

export class LoadStudent implements Action {
  readonly type = StudentActionTypes.LoadStudent;
}

export class SetStudent implements Action {
  readonly type = StudentActionTypes.SetStudent;

  constructor(public payload: Student) {}
}

export type StudentActions = LoadStudent | SetStudent;
