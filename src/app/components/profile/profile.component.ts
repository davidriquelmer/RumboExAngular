import { Component, OnInit } from '@angular/core';

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

  user: any;

  constructor(private store: Store<fromRoot.State>) {
    store.select('student').subscribe(data => {
      this.user = data.student.user;
    //   console.log('wtf');
    //   console.log(data);
    //   console.log(data.student);
    //   console.log(data.student.user);
    //   console.log(this.user);
    //   console.log(data.student.user.name);
    //   console.log('hello pr');
    //   console.log(JSON.stringify(data));
    });
  }

  ngOnInit() {
    //   this.store.select('student').subscribe(data => {
    //     this.user = data.student.user;
    // });
  }
}
