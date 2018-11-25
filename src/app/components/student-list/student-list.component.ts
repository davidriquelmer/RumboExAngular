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

  departments = [
    {num: 4321, name: 'Artes y Ciencias'},
    {num: 9987, name: 'CIencias Agricolas'},
    {num: 1234, name: 'Ingenieria'},
    {num: 7856, name: 'Administracion de Empresas'}
  ];

  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getstudentlist().subscribe(data => {
      console.log(data);
      this.students = data.Users;
    })
  }

}
