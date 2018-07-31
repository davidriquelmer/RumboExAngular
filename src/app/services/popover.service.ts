import { Injectable } from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  private event: Task;
  private show: Boolean = false;
  private position;

  constructor() { }

  show_popover(event: Task) : void {
    this.show = true;
    this.event = event;
  }

  hide(): void {
    this.event = null;
    this.show = false;
    this.position = null;
  }

  is_open() : Boolean {
    return this.show;
  }

  get_event() : Task {
    return this.event;
  }

  // get_position() : {
  //   return this.position;
  // }
}
