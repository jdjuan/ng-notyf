import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';
import { ToastComponent, ToastType } from '../toast/toast.component';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Injectable()
export class NotyfService {

  toastDelay = 2000;
  private toastDynamicStyle: any = {};
  private toastContainerElement: HTMLElement;
  private toastContainerRef: ComponentRef<ToastContainerComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.toastContainerRef = this.createComponentRef(ToastContainerComponent);
    this.toastContainerElement = this.getDOMElementFromComponentRef(this.toastContainerRef);
    this.addChild(this.toastContainerElement);
  }

  setToastStyle(style: any) {
    this.toastDynamicStyle = style;
  }

  setToastContainerStyle(styles: any) {
    this.setDynamicStyles(styles, this.toastContainerRef);
  }

  alert(message: string) {
    const toastRef = this.createComponentRef(ToastComponent);
    toastRef.instance.message = message;
    this.setDynamicStyles(this.toastDynamicStyle, toastRef);
    toastRef.instance.type = ToastType.Alert;
    const toastElement = this.getDOMElementFromComponentRef(toastRef);
    this.addChild(toastElement, this.toastContainerElement);
    this.destroyRef(toastRef, this.toastDelay);
  }

  private createComponentRef(component: any): ComponentRef<any> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    return componentRef;
  }

  private getDOMElementFromComponentRef(componentRef: ComponentRef<any>) {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  private addChild(child: HTMLElement, parent: HTMLElement = document.body) {
    parent.appendChild(child);
  }

  private destroyRef(componentRef, delay) {
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, delay);
  }

  private setDynamicStyles(styles: any, componentRef: ComponentRef<any>) {
    for (const [styleName, styleValue] of Object.entries(styles)) {
      componentRef.instance.renderer.setElementStyle(componentRef.instance.elementRef.nativeElement, styleName, styleValue);
    }
  }
}
