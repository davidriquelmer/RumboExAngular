import { Action } from '@ngrx/store';
import {Student} from "../../models/student";
import {Task} from "../../models/task";
import {Course} from "../../models/course";
import * as studentActions from '../actions/student.actions';


export interface State {
    user: Student
}

export const initialState: State = {
    user: null
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
  return {
    user: action.payload
  };

}
