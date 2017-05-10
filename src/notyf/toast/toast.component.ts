import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'notyf-toast',
  template: `{{message}}`,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input()
  message: string;
  @Input()
  type: ToastType;

  @HostBinding('class.notyf--success') success: boolean;
  @HostBinding('class.notyf--error') error: boolean;

  constructor(public elementRef: ElementRef, public renderer: Renderer) { }

  ngOnInit() {
    this.success = this.type === ToastType.Success;
    this.error = this.type === ToastType.Error;
  }
}

export enum ToastType {
    Success, Error
}