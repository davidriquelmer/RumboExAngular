import {User} from "./user";
import {Course} from "./course";
import {Task} from "./task";

export interface Student extends User {
  // this are user attributes
  id: number,
  username: string,
  password: string,
  email: string,
  name: string,
  lastname: string,
  // user attributes end
  enrolled_program: number,
  student_num: number,
  courses: Course[],
  tasks: {
    personal: Task[],
    study: Task[],
    course: Task[],
    appointment: Task[]
  }
}
