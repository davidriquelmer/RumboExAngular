export interface UserI {
  user_id: number,
  username: string,
  email: string,
  password: string,
  // remember: boolean,
  name: string,
  lastname: string,
  role_id: number,
  role_name: string
  // program: number,
  // student_num: number
}


export class User {
    constructor(
      username?: string,
      password?: string,
      remember?: boolean,
      email?: string,
      name?: string,
      lastname?: string,
      program?: number,
      student_num?: number) {}
}
