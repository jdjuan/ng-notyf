import { ToastContainerComponent } from './toast-container/toast-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { NotyfService } from './shared/notyf.service';

export { NotyfService } from './shared/notyf.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent, ToastContainerComponent],
  exports: [],
  entryComponents: [ToastComponent, ToastContainerComponent],
  providers: [NotyfService]
})
export class NotyfModule { }
