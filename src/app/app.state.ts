import {Student} from "./models/student";
import {Course} from "./models/course";
import {Task} from "./models/task";

export interface AppState {
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
