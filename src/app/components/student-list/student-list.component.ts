import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Array<Student>;
  folders = [
    {name: 'uno', updated: '1'},
    {name: 'dos', updated: '2'}
  ];
  notes = [
    {name: 'this is supposed to be a demo', updated: true}
  ];


  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getstudentlist().subscribe(data => {
      console.log(data);
      this.students = data;
    })
  }

}
