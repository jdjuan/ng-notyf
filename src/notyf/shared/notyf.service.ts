import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Injectable()
export class NotyfService {

  toastContainer: HTMLElement;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) {
    this.toastContainer = this.createElementFromComponent(ToastContainerComponent);
    this.addChild(this.toastContainer);
  }

  private createElementFromComponent(component: any): HTMLElement {
    const containerRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    return (containerRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  private addChild(child: HTMLElement, parent: HTMLElement = document.body) {
    parent.appendChild(child);
  }

  alert() {
    const toast = this.createElementFromComponent(ToastComponent);
    this.addChild(toast, this.toastContainer);
  }
}