import { Action } from '@ngrx/store';
import {Task} from "../../models/task";
import * as taskActions from  '../actions/task.actions';


export interface State {
  tasks: {
    course: Task[],
    study: Task[],
    appointment: Task[],
    personal: Task[]
  }
}

export const initialState: State = {
    tasks: {
    course: [],
    study: [],
    appointment: [],
    personal: []
  }
};

export function reducer(state = initialState, action: taskActions.TaskActions): State {
  switch (action.type) {
    case taskActions.TaskActionTypes.SetTasks:
      return {tasks: action.payload};

    default:
      return state;
  }
}
