import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { NotyfService } from './shared/notyf.service';
import { DomService } from './shared/dom.service';

export { DomService } from './shared/dom.service';
export { NotyfService } from './shared/notyf.service';
export { ToastComponent } from './toast/toast.component';
export { ToastContainerComponent } from './toast-container/toast-container.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ToastComponent, ToastContainerComponent],
  exports: [],
  entryComponents: [ToastComponent, ToastContainerComponent],
  providers: [NotyfService, DomService]
})
export class NotyfModule { }
