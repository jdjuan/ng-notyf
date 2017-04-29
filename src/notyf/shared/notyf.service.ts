import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';
import { ToastComponent } from './../toast/toast.component';
import { ToastContainerComponent } from './../toast-container/toast-container.component';

@Injectable()
export class NotyfService {

  toastContainer: HTMLElement;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
    this.toastContainer = this.createElementFromComponent(ToastContainerComponent);
    this.addChild(this.toastContainer);
  }

  createElementFromComponent(component) {
    const containerRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    return (containerRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  addChild(child, dom = document.body) {
    dom.appendChild(child);
  }

  alert() {
    const toast = this.createElementFromComponent(ToastComponent);
    this.addChild(toast, this.toastContainer);
  }
}

  // componentRef.instance.type = ToastType.Alert;
  // this.appRef.bootstrap(this.toastFactory);