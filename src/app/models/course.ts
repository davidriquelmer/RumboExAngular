import {Task} from "./task";

export interface Course {
  codification: number,
  name: string,
  professor_id: number,
  section: number,
  grades: Grade[],
  cumulative_average: number,
  general_average,
  status: Status,
  tasks: Task[]
}

export interface Grade {
  evaluation: string,
  grade: number,
  weight: number,
  total: number
}

export enum Status {
  Excellent,
  Passing,
  Surviving,
  NotPassing
}
