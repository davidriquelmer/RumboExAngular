import {Component, Input, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
// import {AppState} from "../../app.state";
import {Student} from "../../models/student";
import * as Actions from '../../store2/actions/student.action';
import { Observable } from 'rxjs/Observable';
import {StudentState} from "../../store2/reducers/student.reducer";
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = sessionStorage.getItem('token');
  student: any;
  courses: any;
  tasks: any;

  constructor(private store: Store<fromRoot.State>) {
    // store.select('student').subscribe(data => {
    //   this.user = data.user;
    //   console.log('wtf');
    //   console.log(data);
    //   console.log(data.user);
    //   console.log(this.user);
    //   console.log('hello pr');
    //   console.log(JSON.stringify(data));
    // });
  }

  ngOnInit() {
   this.store.select('student').subscribe(data => {
      this.student = data.user;
    });
    this.store.select('course').subscribe(data => {
      this.courses = data.courses;
    });
    this.store.select('task').subscribe(data => {
      this.tasks = data.tasks;
    });
  }
}
