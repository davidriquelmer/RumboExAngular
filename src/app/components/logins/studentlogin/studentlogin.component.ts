import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../models/user';
import {AuthService} from '../../../services/auth.service';
import {ErroralertService} from '../../../services/erroralert.service';
import {Store} from '@ngrx/store';
// import {AppState} from 'src/app/app.state';
import * as fromRoot from '../../../store/reducers';
import * as studentActions from '../../../store/actions/student.actions';
import * as courseActions from '../../../store/actions/course.actions';


@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthService, private router: Router, private error: ErroralertService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.auth.studentlogin(this.user)
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

      // Load user data
      this.store.dispatch(new studentActions.LoadStudent());
      // Load student's courses
      this.store.dispatch(new courseActions.LoadCourses());
      // Load student's tasks
      // this.store.dispatch(new );

      this.router.navigate(['/studentmain']);
    })
    .catch((err) => {
      console.log(err);
      this.error.displaymessage("Incorrect credentials. Try again!");
    });
  }

}
