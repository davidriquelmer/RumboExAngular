import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit {

  settings: any = {
        theme: 'ios'
  }

  sub;
  course;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        console.log(params);
        console.log(params['course']);
        this.course = params['course'];
      });
    console.log('current course:', this.course);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
