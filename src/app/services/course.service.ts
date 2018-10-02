import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../models/task";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "@angular/common/http";
import {Cacheable} from "ngx-cacheable";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CourseService {

  private BASE_URL: string = 'http://localhost:5000/course';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  @Cacheable()
  get_courses(user_id): Observable<any> {
    let url: string = `${this.BASE_URL}s/${user_id}`;
    return this.http.get(url);
  }

  @Cacheable()
  get_course(course_id): Observable<any> {
    let url: string = `${this.BASE_URL}/${course_id}`;
    return this.http.get(url);
  }

  @Cacheable()
  get_grades_by_course_id(course_id): Observable<any> {
    let url: string = `${this.BASE_URL}/${course_id}/grades`;
    return this.http.get(url);
  }

}
