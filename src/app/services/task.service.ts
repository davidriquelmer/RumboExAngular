import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "selenium-webdriver/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TaskService {

  private BASE_URL: string = 'http://localhost:5000/task';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  task: Task;

  get_personal_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/personal/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  get_course_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/course/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  get_study_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/study/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  get_study_tasks_by_course(user_id, course_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/study/${user_id}/${course_id}`;
    return this.http.get<Task[]>(url);
  }

  insert_personal_task(user_id, task: Task): Observable<Task> {
    let url: string = `${this.BASE_URL}/personal/${user_id}`;
    return this.http.post<Task>(url, JSON.stringify(task), {headers: this.httpheaders});
  }

  get_all() {
    return this.http.get(this.BASE_URL);
  }

}
