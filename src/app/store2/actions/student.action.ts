import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {User} from "../../models/user";
import {Student} from "../../models/student";
import {Task} from "../../models/task";

export const LOAD_STUDENT = '[STUDENT] Load';
export const SET_STUDENT = '[STUDENT] Set'
export const ADD_TASK = '[TASK] Add';
export const REMOVE_TASK = '[TASK] Remove';


export class LoadStudent implements Action {
  readonly type = LOAD_STUDENT;

  constructor(public payload: number) {}
}

export class SetStudent implements Action {
  readonly type = SET_STUDENT;

  constructor(public payload: Student) {}
}

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public payload: number) {}
}

export type Actions = LoadStudent | SetStudent | AddTask | RemoveTask;
