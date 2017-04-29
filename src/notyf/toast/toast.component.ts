import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styles: ['']
})
export class ToastComponent implements OnInit {

  @Input()
  type: ToastType;

  constructor() { }

  ngOnInit() {
  }

}

export enum ToastType {
  Alert, Success
}
