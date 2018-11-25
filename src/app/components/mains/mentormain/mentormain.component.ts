import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/student";

@Component({
  selector: 'app-mentormain',
  templateUrl: './mentormain.component.html',
  styleUrls: ['./mentormain.component.css']
})
export class MentormainComponent implements OnInit {

  students: Array<Student>;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getstudentlist().subscribe(data => {
      this.students = data;
    })
  }

}
