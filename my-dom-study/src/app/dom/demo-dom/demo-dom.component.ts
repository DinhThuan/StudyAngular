import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Component({
   selector: 'app-demo-dom',
   templateUrl: './demo-dom.component.html',
   styleUrls: ['./demo-dom.component.scss']
})
export class DemoDomComponent implements OnInit, AfterViewInit {
   @ViewChild('para1') p1: ElementRef;
   @ViewChild('input1') input1: ElementRef;
   constructor(private renderer: Renderer) { }

   ngOnInit() {
   }

   ngAfterViewInit() {
      console.log('ngAfterViewInit');
      console.log(this.p1.nativeElement);
      // this.p1.nativeElement.style.color = 'red';
      this.p1.nativeElement.style.padding = '20px';
      this.p1.nativeElement.style.border = '1px solid red';
      this.p1.nativeElement.style.fontSize = '100px';
      this.renderer.setElementStyle(
         this.p1.nativeElement,
         'color',
         'green'
      );
      this.renderer.invokeElementMethod(
         this.input1.nativeElement,
         'focus'
      );
   }

}
