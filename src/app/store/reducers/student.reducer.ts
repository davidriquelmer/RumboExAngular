import { Action } from '@ngrx/store';
import {Student} from "../../models/student";
import {Task} from "../../models/task";
import {Course} from "../../models/course";
import * as studentActions from '../actions/student.actions';


export interface State {
  student: {
    user: Student,
    courses: Course[],
    tasks: {
      course: Task[],
      study: Task[],
      appointment: Task[],
      personal: Task[]
    }
  }
}

export const initialState: State = {
  student: {
    user: null,
    courses: [],
    tasks: {
      course: [],
      study: [],
      appointment: [],
      personal: []
    }
  }
};

export function reducer(state = initialState, action: studentActions.StudentActions): State {
  switch (action.type) {
    case studentActions.StudentActionTypes.SetStudent:
      return handleSetStudent(state, action);

    default:
      return state;
  }
}

function handleSetStudent(state: State, action: studentActions.SetStudent): State {
  state.student.user = action.payload;
  return state;
}
