import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = 'http://127.0.0.1:5000';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  constructor(private http: HttpClient) { }

  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  adminlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/adminlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  studentlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/studentlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  counselorlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/counselorlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  mentorlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/mentorlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  professorlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/professorlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  advisorlogin(user): Promise<any> {
    let url: string = `${this.BASE_URL}/advisorlogin`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  register(user): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.httpheaders}).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}/status`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, {headers: this.httpheaders}).toPromise();
  }

   logout(): Promise<any> {
    let url: string = `${this.BASE_URL}/logout`;
    return this.http.post(url, null, {headers: this.httpheaders}).toPromise();
  }
}
