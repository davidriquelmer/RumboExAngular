import { Component } from '@angular/core';
import { mobiscroll, MbscWidgetOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
    theme: 'ios'
};

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})

export class WidgetComponent {

    checked: string = '';
    update: string = 'Right now';

    settings: MbscWidgetOptions = {
        display: 'center'
    };

    listSettings: MbscWidgetOptions = {
        display: 'center',
        onSet: (event, inst) => {
            this.checked = this.update;
        }
    };

}
