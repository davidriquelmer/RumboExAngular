import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {Student} from "../models/student";
import {Task} from "../models/task";

export const ADD_TASK = '[TASK] Add';
export const REMOVE_TASK = '[TASK] Remove';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public payload: number) {}
}

export type Actions = AddTask | RemoveTask;
