import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private show: Boolean = false;

  constructor() { }

  hide(): void {
    this.show = false;
  }

  open(): void {
    this.show = true;
  }

  is_open() : Boolean {
    return this.show;
  }

}
