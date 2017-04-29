import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { NotyfService } from './shared/notyf.service';

export { NotyfService } from './shared/notyf.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  exports: [],
  entryComponents: [ToastComponent],
  providers: [NotyfService]
})
export class NotyfModule { }
