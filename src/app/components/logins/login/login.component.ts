import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';
import { Router } from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      sessionStorage.setItem('userid', user.result.userid);
      sessionStorage.setItem('username', user.result.username);
      sessionStorage.setItem('email', user.result.email);
      sessionStorage.setItem('role', user.result.roles[0]);
      sessionStorage.setItem('token', user);
      sessionStorage.setItem('logged', 'true');
      // The complete object
      // console.log(user);
      console.log(sessionStorage.getItem('token'));
      console.log(sessionStorage.getItem('userid'));
      console.log(sessionStorage.getItem('username'));
      console.log(sessionStorage.getItem('email'));
      console.log(sessionStorage.getItem('role'));
      this.router.navigate(['/main']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
