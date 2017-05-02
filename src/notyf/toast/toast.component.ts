import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer
} from '@angular/core';

@Component({
  selector: 'notyf-toast',
  template: `{{message}}`,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input()
  type: ToastType;

  @Input()
  message: string;

  constructor(public elementRef: ElementRef, public renderer: Renderer) { }

  ngOnInit() { }

}

export enum ToastType {
  Alert, Success
}
