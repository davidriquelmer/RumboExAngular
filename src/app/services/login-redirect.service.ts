import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectService {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): boolean {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/status');
      return false;
    }
    else {
      return true;
    }
  }
}
