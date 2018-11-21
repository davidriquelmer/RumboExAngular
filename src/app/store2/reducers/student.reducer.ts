import {Student} from "../../models/student";
import * as StudentActions from '../actions/student.action';
import {Course} from "../../models/course";
import {Task} from "../../models/task";

export interface StudentState {
  student?: {
    user?: Student,
    courses?: Course[],
    tasks: {
      course?: Task[],
      study?: Task[],
      personal?: Task[],
      appointment?: Task[]
    }
  }
}

const initialState: StudentState = {
  student: {
    user: {
      role_id: null,
      role_name: null,
      user_id: null,
      username: null,
      email: null,
      password: null,
      name: null,
      lastname: null,
      department_name: null,
      department_num: null,
      enrolled_program: null,
      program_name: null,
      student_num: null,
    },
    courses: [],
    tasks:
      {
        personal: [],
        study: [],
        course: [],
        appointment: []
      }
  }
};

export function reducer(state: StudentState = initialState, action: StudentActions.Actions) {

  switch (action.type) {
    case StudentActions.SET_STUDENT:
      state.student.user = action.payload;
      console.log(state);
      console.log(state.student.user);
      return state;
    case StudentActions.ADD_TASK:
      // state.tasks.personal = [...state.tasks.personal, action.payload];
      // return initialState.tasks.personal.push(action.payload);
    case StudentActions.REMOVE_TASK:
      // state.tasks.personal.splice(action.payload, 1);
      // return state;
    default:
      return state;

  }
}

export const getStudentDetails = (state: StudentState) => state.student.user;
export const getCourses = (state: StudentState) => state.student.courses;
