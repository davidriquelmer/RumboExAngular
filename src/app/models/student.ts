import {UserI} from "./user";
import {Course} from "./course";
import {Task} from "./task";

export interface Student extends UserI {
  // this are user attributes
  // id: number,
  // username: string,
  // password: string,
  // email: string,
  // name: string,
  // lastname: string,
  // user attributes end
  department_name: string,
  department_num: number,
  enrolled_program: number,
  program_name: string,
  student_num: number,
}
