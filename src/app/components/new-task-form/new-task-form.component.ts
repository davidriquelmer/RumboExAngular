import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions, MbscRangeOptions, MbscFormOptions, MbscRange, MbscEventcalendar } from '@mobiscroll/angular';

let now = new Date();

mobiscroll.settings = {
    theme: 'android'
};

@Component({
  selector: 'app-new-task-form',
  templateUrl: '../individual-course/new-course-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent {

    @ViewChild('mbscRange')
    range: MbscRange;

    @ViewChild('mbscEventCal')
    eventCal: MbscEventcalendar;

    allDay: boolean = false;
    eventDate: Array < Date > = [now, new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2)];
    isBusy: string = 'busy';
    eventText: string = '';
    events: Array < any > = [{
        d: new Date(),
        text: 'First Event'
    }];

    rangeSettings: MbscRangeOptions = {
        theme: 'ios',
        controls: ['date', 'time'],
        dateWheels: '|D M d|',
        startInput: '#startDate',
        endInput: '#endDate',
        tabs: false
    };

    eventSettings: MbscEventcalendarOptions = {
        theme: 'ios',
        display: 'inline',
        layout: 'liquid',
        view: {
            calendar: { type: 'week' }
        }
    };

    formSettings: MbscFormOptions = {
        theme: 'ios'
    };

    addEvent() {
        this.events.push({
            start: this.eventDate[0],
            end: this.eventDate[1],
            text: this.eventText || 'New Event',
            allDay: this.allDay
        });
        this.eventText = '';
        // this.eventDesc = '';
        this.eventCal.instance.setVal(this.eventDate[0]);
    };

    change() {
        this.range.instance.option({
            controls: this.allDay ? ['date'] : ['date', 'time'],
            dateWheels: this.allDay ? 'MM dd yy' : '|D M d|'
        });

        this.range.instance.setVal(this.eventDate, true, false);
    }
}
