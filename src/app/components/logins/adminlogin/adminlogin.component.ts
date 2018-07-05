import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.adminlogin(this.user)
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
      this.router.navigate(['/register']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
