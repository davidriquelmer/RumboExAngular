import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit {

  settings: any = {
        theme: 'ios'
    }

  constructor() { }

  ngOnInit() {
  }



}
