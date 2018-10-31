import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {AppState} from "../../app.state";
import {Student} from "../../models/student";
import * as StudentActions from '../../actions/student.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Student;

  constructor(private store: Store<AppState>) {
    store.select('student').subscribe(data => {
      this.user = data;
    })
  }

  ngOnInit() {
  }

}
