import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TaskService {

  private BASE_URL: string = 'http://localhost:5000/task';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  task: Task;

  get_personal_tasks(): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/personal/802364584`;
    return this.http.get<Task[]>(url);
  }

  get_course_tasks(): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/course/802364584`;
    return this.http.get<Task[]>(url);
  }

  get_study_tasks(): Observable<Task[]> {
    let url: string = `${this.BASE_URL}/study/802364584`;
    return this.http.get<Task[]>(url);
  }

  get_all() {
    return this.http.get(this.BASE_URL);
  }

}
