import { Component, OnInit } from '@angular/core';
import {ErroralertService} from '../../services/erroralert.service';

@Component({
  selector: 'app-erroralert',
  templateUrl: './erroralert.component.html',
  styleUrls: ['./erroralert.component.css']
})
export class ErroralertComponent implements OnInit {
  constructor(private error: ErroralertService) {
  }
  error_msg1(): String {
    return this.error.error_msg;
  }
  error_display1(): Boolean {
    return this.error.error_display;
  }
  ngOnInit() {
  }

}
