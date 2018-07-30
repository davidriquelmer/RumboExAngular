import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "selenium-webdriver/http";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CourseService {

  private BASE_URL: string = 'http://localhost:5000/course';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  get_courses(user_id): Observable<any> {
    let url: string = `${this.BASE_URL}/${user_id}`;
    return this.http.get(url);
  }

}
