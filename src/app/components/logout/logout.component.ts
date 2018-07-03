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

  logout(): void {
    this.auth.logout()
    .then(() => {
      sessionStorage.removeItem('userid');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('logged');
      this.router.navigate(['/login']);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
