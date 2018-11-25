import { Action } from '@ngrx/store';
import {Task} from "../../models/task";

export enum TaskActionTypes {
  LoadTasks = '[Task] Load',
  SetTasks = '[Task] Set'
}

interface Tasks {
  course: Task[],
  study: Task[],
  appointment: Task[],
  personal: Task[]
}

export class LoadTasks implements Action {
  readonly type = TaskActionTypes.LoadTasks;
}

export class SetTasks implements Action {
  readonly type = TaskActionTypes.SetTasks;

  constructor(public payload: Tasks) {}
}



export type TaskActions = LoadTasks | SetTasks;
