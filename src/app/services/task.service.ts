import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "selenium-webdriver/http";

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

  insert_personal_task(user_id, data): Promise<any> {
    let url: string = `${this.BASE_URL}/personal/${user_id}`;
    return this.http.post(url, data, {headers: this.httpheaders}).toPromise();
  }

  get_all() {
    return this.http.get(this.BASE_URL);
  }

}
