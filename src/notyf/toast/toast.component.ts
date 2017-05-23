import {
  Component,
  OnInit,
  Input,
  ElementRef,
  Renderer,
  HostBinding
} from '@angular/core';

import {
  AnimationTriggerMetadata,
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

export const flyInOut = trigger('flyInOut', [
  transition('void => *', [
    style({
      transform: 'translateY(0) scaleX(0.75)',
      marginBottom: '-50px',
      opacity: 0
    }),
    animate('0.4s cubic-bezier(0.23, 1, 0.32, 1)')
  ]),
  transition('* => void', [
    animate('0.4s cubic-bezier(0.23, 1, 0.32, 1)', style({
      transform: 'translateX(10px)',
      opacity: 0
    }))
  ])
])

@Component({
  selector: 'notyf-toast',
  template: `{{message}}`,
  animations: [flyInOut],
  host: {
    '[@flyInOut]': 'true'
  },
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