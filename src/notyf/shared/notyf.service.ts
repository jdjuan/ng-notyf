import {
  Injectable,
  ApplicationRef,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ComponentFactory
} from '@angular/core';
import { ToastComponent, ToastType } from './../toast/toast.component';

@Injectable()
export class NotyfService {

  factory: ComponentFactory<ToastComponent>;
  toastContainer: HTMLElement;

  constructor(private appRef: ApplicationRef,
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
    this.factory = componentFactoryResolver.resolveComponentFactory(ToastComponent);
    this.toastContainer = document.createElement('div');
    this.toastContainer.classList.add('toast-container');
    document.body.appendChild(this.toastContainer);
  }

  addComponent() {
    let componentRef = this.factory.create(this.injector);
    componentRef.instance.type = ToastType.Alert;
    this.appRef.attachView(componentRef.hostView);
    this.toastContainer.appendChild(
      (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement
    );
  }
}