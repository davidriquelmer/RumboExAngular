import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // type: String;
  // title: String;
  // description: String;
  // start: Date;
  // end: Date;
  //
  // user_id = sessionStorage.getItem('userid');
  //
  // visible: Boolean;
  //
  // constructor(private taskService: TaskService) { }
  //
  // is_open() : Boolean {
  //   return this.visible;
  // }
  //
  // show(): void {
  //   console.log(this.visible);
  //   this.visible = true;
  // }
  //
  // hide(): void {
  //   this.visible = false;
  // }
  //
  // ngOnInit() {
  //   this.visible = false;
  // }
  //
  // create_task(): void {
  //   console.log('wtf');
  //   console.log(this.title);
  //   console.log(this.description);
  //   var data = {'type': this.type, 'title': this.title, 'description': this.description, 'start': this.start, 'end': this.end};
  //   this.taskService.insert_personal_task(this.user_id, data);
  // }

}
