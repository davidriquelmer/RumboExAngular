import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {
    'id': sessionStorage.getItem('userid'),
    'name': sessionStorage.getItem('username')
  };

  constructor() { }

  ngOnInit() {
  }

}
