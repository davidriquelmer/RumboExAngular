import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ErroralertService} from "../../../services/erroralert.service";
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-psychologistlogin',
  templateUrl: './psychologistlogin.component.html',
  styleUrls: ['./psychologistlogin.component.css']
})
export class PsychologistloginComponent implements OnInit {

  user: User = new User();

  constructor(private auth: AuthService, private router: Router, private error: ErroralertService) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.psychologistlogin(this.user)
    .then((user) => {
      this.error.hidemessage();
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
      this.router.navigate(['/psychologistmain']);
    })
    .catch((err) => {
      console.log(err);
      this.error.displaymessage("Incorrect credentials. Try again!");
    });
  }

}
