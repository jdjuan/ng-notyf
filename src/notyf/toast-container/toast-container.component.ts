import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'notyf-toast-container',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./toast-container.css']
})
export class ToastContainerComponent implements OnInit {

    constructor(public elementRef: ElementRef, public renderer: Renderer2) { }

    ngOnInit() { }
}
