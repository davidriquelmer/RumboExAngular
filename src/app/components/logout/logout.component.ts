import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.logout();
  }
//Dependiendo del role de cada persona es la ruta a la q vas a redirijir.
  //1 -->student
  //2--> counselor
  //3-->mentor
  //4-->admin
  //5-->professor
  //6-->advisor

  logout(): void {
    this.auth.logout()
    .then(() => {
      console.log(sessionStorage.getItem('role'));
      sessionStorage.removeItem('userid');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('email');
      let role: String = sessionStorage.getItem('role');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('logged');

      this.router.navigate(['/' + role + 'login']);

    })
    .catch((err) => {
      console.log(err);
    });
  }

}
