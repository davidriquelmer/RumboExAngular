import {Student} from "../models/student";
import * as StudentActions from '../actions/student.action';
import {Course} from "../models/course";

const initialState: Student = {
  id: 7,
  username: 'petra',
  email: 'petra@petra.com',
  password: 'petra',
  name: 'petra',
  lastname: 'petra',
  enrolled_program: 0o123,
  student_num: 802158866,
  courses: [

  ],
  tasks:
    {
      'personal': [{
        title: 'no mames',
        description: '',
        start: 7,
        end: 8,
        finished: false,
      }],
      'study': [{
        title: 'si mamo',
        description: '',
        start: 8,
        end: 9,
        finished: false,
      }],
      'course': [],
      'appointment': []
    }
};

export function reducer(state: Student = initialState, action: StudentActions.Actions) {

  switch (action.type) {
    case StudentActions.ADD_TASK:
      return initialState.tasks.personal.push(action.payload);
    case StudentActions.REMOVE_TASK:
      state.tasks.personal.splice(action.payload, 1);
      return state;
    default:
      return state;

  }
}
