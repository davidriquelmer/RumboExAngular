import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = 'http://localhost:5000/api';
  private httpheaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
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
}
