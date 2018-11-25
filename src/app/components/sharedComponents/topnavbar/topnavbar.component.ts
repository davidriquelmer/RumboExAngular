import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  role = sessionStorage.getItem('role');
  mainpath = '/'+this.role+'main'
  user = sessionStorage.getItem('token');

  constructor() { }

  ngOnInit() {
  }

}
