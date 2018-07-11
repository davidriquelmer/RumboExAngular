import {Directive, ElementRef, EventEmitter, Input, Output, Renderer} from '@angular/core';
import {ErroralertService} from './services/erroralert.service';

@Directive({
  selector: '[appErroralert]'
})
export class ErroralertDirective {
  @Output() error_ms = new EventEmitter();
  @Output() error_disp = new EventEmitter();

  private error: ErroralertService;

  constructor() {
  }
  error_msg(): void {
    this.error_ms.emit(this.error.error_msg);
  }
  error_display(): void {
    this.error_disp.emit(this.error.error_display);
  }

}
