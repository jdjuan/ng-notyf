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

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    let toastContainerRef = this.createElementFromComponent(ToastContainerComponent);
    this.toastContainer = this.getDOMElementFromComponentRef(toastContainerRef);
    this.addChild(this.toastContainer);
  }

  private createElementFromComponent(component: any): ComponentRef<any> {
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

  alert(message: string) {
    let toastRef = this.createElementFromComponent(ToastComponent);
    toastRef.instance.message = message;
    toastRef.instance.type = ToastType.Alert;
    const toast = this.getDOMElementFromComponentRef(toastRef);
    this.addChild(toast, this.toastContainer);


    setTimeout(() => {
      this.appRef.detachView(toastRef.hostView);
      toastRef.destroy();
    }, 2000);
  }
}
