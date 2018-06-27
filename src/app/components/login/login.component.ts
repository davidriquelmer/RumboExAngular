import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import {Router} from "@angular/router";

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
    console.log('Entra al metodo');
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.auth_token);
      this.router.navigate(['/main']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
