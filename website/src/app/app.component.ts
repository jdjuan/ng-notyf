import { Component } from '@angular/core';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private notyfService: NotyfService) { }

  success($event) {
    $event.preventDefault();
    this.notyfService.success();
  }

  error($event) {
    $event.preventDefault();
    this.notyfService.error();
  }
}
