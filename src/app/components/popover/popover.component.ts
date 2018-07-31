import { Component, OnInit } from '@angular/core';
import { mobiscroll } from '@mobiscroll/angular';
import {PopoverService} from "../../services/popover.service";

mobiscroll.settings = {
    theme: 'ios'
};

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  constructor(private popover: PopoverService) { }

  ngOnInit() {
  }

  bubbleSettings: any = {
        display: 'bubble',
        anchor: '#show-bubble .mbsc-btn',
        buttons: [{
                text: 'Ok',
                handler: 'set'
            },
            'cancel'
        ]
    };

}
