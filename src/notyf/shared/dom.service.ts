import { INotyfStyle } from './inotyf-style';
import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ComponentRef
} from '@angular/core';

@Injectable()
export class DomService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    createComponentRef(component: any): ComponentRef<any> {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        return componentRef;
    }

    getDomElementFromComponentRef(componentRef: ComponentRef<any>): HTMLElement {
        return (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
    }

    addChild(child: HTMLElement, parent: HTMLElement = document.body) {
        parent.appendChild(child);
    }

    destroyRef(componentRef: ComponentRef<any>, delay: number) {
        setTimeout(() => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        }, delay);
    }

    setDynamicStyles(styles: INotyfStyle, componentRef: ComponentRef<any>) {
        for (const [styleName, styleValue] of Object.entries(styles)) {
            componentRef.instance.renderer.setElementStyle(
                componentRef.instance.elementRef.nativeElement,
                styleName,
                styleValue
            );
        }
    }
}
