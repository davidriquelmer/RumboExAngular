import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/student';

@Injectable({providedIn: 'root'})
export class StudentService {
  private BASE_URL: string = 'http://localhost:5000';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getstudentlist(): Observable<Student[]> {
    let url: string = `${this.BASE_URL}/student`;
    return this.http.get<Student[]>(url);
  }

  
  getstudentpromise(): Observable<Student[]> {
    let url: string = `${this.BASE_URL}/student`;
    return this.http.get<Student[]>(url);

}
