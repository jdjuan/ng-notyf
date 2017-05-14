import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DomService } from './shared/dom.service';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { NotyfService } from './shared/notyf.service';

export { NotyfService } from './shared/notyf.service';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [ToastComponent, ToastContainerComponent],
  exports: [],
  entryComponents: [ToastComponent, ToastContainerComponent],
  providers: [NotyfService, DomService]
})
export class NotyfModule { }
