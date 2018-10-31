export interface Course {
  codification: number,
  name: string,
  professor_id: number,
  section: number,
  grades: Grade[]
}

export interface Grade {
  evaluation: string,
  grade: number,
  weight: number,
  total: number
}
