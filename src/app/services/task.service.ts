import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Cacheable} from "ngx-cacheable";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TaskService {

  private BASE_URL: string = 'http://localhost:5000/task';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(private http: HttpClient) { }

  task: Task;

  @Cacheable()
  get_personal_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/personal/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  @Cacheable()
  get_course_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/course/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  @Cacheable()
  get_study_tasks(user_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/study/${user_id}`;
    return this.http.get<Task[]>(url);
  }

  @Cacheable()
  get_study_tasks_by_course(user_id, course_id): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/study/${user_id}/${course_id}`;
    return this.http.get<Task[]>(url);
  }

  insert_study_task(task: Task, user_id, course_id): Promise<any> {
    let url: string = `${this.BASE_URL}/study/${user_id}`;
    console.log(url);
    let new_task = {
      'task_name': task['title'],
      'task_description': task['description'],
      'start_time': task['start'],
      'end_time': task['end'],
      'finished': false,
      'course_id': course_id
    };
    console.log(new_task);
    console.log('me voa cagar en la madre del diablo');
    // this post is not working
    return this.http.post(url, new_task, {headers: this.httpheaders}).toPromise();
  }

  insert_personal_task(user_id, task: Task): Promise<any> {
    let url: string = `${this.BASE_URL}/personal/${user_id}`;
    return this.http.post<Task>(url, task, {headers: this.httpheaders}).toPromise();
  }

  get_all() {
    return this.http.get(this.BASE_URL);
  }

}
