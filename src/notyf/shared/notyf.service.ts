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

  private toastContainer: HTMLElement;
  toastDelay = 2000;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    const toastContainerRef = this.createComponentRef(ToastContainerComponent);
    this.toastContainer = this.getDOMElementFromComponentRef(toastContainerRef);
    this.addChild(this.toastContainer);
  }

  alert(message: string) {
    const toastRef = this.createComponentRef(ToastComponent);
    toastRef.instance.message = message;
    toastRef.instance.type = ToastType.Alert;
    const toast = this.getDOMElementFromComponentRef(toastRef);
    this.addChild(toast, this.toastContainer);
    this.destroyRef(toast, this.toastDelay);
  }

  private createComponentRef(component: any): ComponentRef<any> {
    return this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
  }

  private getDOMElementFromComponentRef(componentRef: ComponentRef<any>) {
    return (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  private addChild(child: HTMLElement, parent: HTMLElement = document.body) {
    parent.appendChild(child);
  }

  private destroyRef(componentRef, delay) {
    setTimeout(() => { componentRef.destroy(); }, delay);
  }
}
