import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'notyf-toast-container',
    template: ``,
    styleUrls: ['./toast-container.css']
})
export class ToastContainerComponent implements OnInit {

    constructor(public elementRef: ElementRef, public renderer: Renderer) { }

    ngOnInit() { }
}