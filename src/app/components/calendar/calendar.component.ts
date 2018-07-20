import { Component } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'web'
};

var now = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

  // current_user_id = sessionStorage.getItem('user_id');

  // personal_tasks = this.taskService.get_personal_tasks(this.current_user_id);

    labelDays: Array<any> =
      [
        { d: '12/25', text: 'Christmas', color: "#f48fb1" },
        { d: '1/1', text: 'New year' },
        { d: '12/1', text: 'Meeting', color: '#ffc400' },
        { d: new Date(now.getFullYear(), now.getMonth() + 1, 4), text: 'Spa day', color: '#cfd8dc' },
        { d: new Date(now.getFullYear(), now.getMonth() + 2, 24), text: 'BD Party', color: '#9ccc65' },
        { d: new Date(now.getFullYear(), now.getMonth() - 2, 13), text: 'Exams', color: '#d4e157' },
        { d: new Date(now.getFullYear(), now.getMonth() - 1, 6), text: 'Trip', color: "#f4511e" },
        { d: new Date(now.getFullYear(), now.getMonth() + 1, 6), color: '#46c4f3', text: 'Pizza Night' },
        { d: new Date(now.getFullYear(), now.getMonth() + 1, 22), color: '#7e56bd', text: 'Beerpong' },
        { d: new Date(now.getFullYear(), now.getMonth() - 1, 11), color: '#46c4f3', text: 'Anniversary' },
        { d: new Date(now.getFullYear(), now.getMonth() - 1, 29), color: '#7e56bd', text: 'Pete BD' },
        { d: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3', text: 'Ana BD' },
        { d: new Date(now.getFullYear(), now.getMonth(), 3), color: '#7e56bd', text: 'Concert' },
        { d: new Date(now.getFullYear(), now.getMonth(), 11), color: '#f13f77', text: 'Trip' },
        { d: new Date(now.getFullYear(), now.getMonth(), 19), color: '#8dec7d', text: 'Math exam' },
        { d: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986', text: 'Party' },
        { start: new Date(now.getFullYear(), now.getMonth() + 1, 15), end: new Date(now.getFullYear(), now.getMonth() + 1, 18), text: 'Conference', color: '#f4511e' }
    ];

}

