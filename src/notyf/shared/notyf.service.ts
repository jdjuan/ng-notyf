import { INotyfStyle } from './inotyf-style';
import { DomService } from './dom.service';
import { Injectable, ComponentRef } from '@angular/core';
import { ToastComponent, ToastType } from '../toast/toast.component';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Injectable()
export class NotyfService {

  private _toastDelay = 2000;
  private _toastStyle: INotyfStyle = {};
  private _toastContainerStyle: INotyfStyle = {};
  private toastContainerElement: HTMLElement;
  private toastContainerRef: ComponentRef<ToastContainerComponent>;

  constructor(private domService: DomService) {
    this.toastContainerRef = this.domService.createComponentRef(ToastContainerComponent);
    this.toastContainerElement = this.domService.getDomElementFromComponentRef(this.toastContainerRef);
    this.domService.addChild(this.toastContainerElement);
  }

  success(message: string) { this.addToast(message, ToastType.Success); }
  error(message: string) { this.addToast(message, ToastType.Error); }

  private addToast(message: string, type: ToastType) {
    const toastRef = this.domService.createComponentRef(ToastComponent);
    this.domService.setDynamicStyles(this.toastStyle, toastRef);
    toastRef.instance.message = message;
    toastRef.instance.type = type;
    const toastElement = this.domService.getDomElementFromComponentRef(toastRef);
    this.domService.addChild(toastElement, this.toastContainerElement);
    this.domService.destroyRef(toastRef, this.toastDelay);
  }

  get toastDelay(): number {
    return this._toastDelay;
  }

  set toastDelay(toastDelay: number) {
    this._toastDelay = toastDelay > 0 ? toastDelay : 0;
  }

  get toastStyle(): INotyfStyle {
    return this._toastStyle;
  }

  set toastStyle(toastStyle: INotyfStyle) {
    this._toastStyle = toastStyle;
  }

  get toastContainerStyle(): INotyfStyle {
    return this._toastContainerStyle;
  }

  set toastContainerStyle(toastContainerStyle: INotyfStyle) {
    this._toastContainerStyle = toastContainerStyle;
    this.domService.setDynamicStyles(this.toastContainerStyle, this.toastContainerRef);
  }
}
