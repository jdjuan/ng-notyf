import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'notyf-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  host: {
    'class': 'notyf-toast'
  },
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

  @Input()
  type: ToastType;

  @Input()
  message: string;

  constructor() { }

  ngOnInit() {
  }

}

export enum ToastType {
  Alert, Success
}
