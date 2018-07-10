import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registration(): void {
    this.auth.register(this.user)
    .then((user) => {
      console.log(user);
      this.router.navigate(['/main']);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
