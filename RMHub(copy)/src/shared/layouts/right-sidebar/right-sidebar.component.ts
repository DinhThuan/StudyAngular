import {
   Component,
   Input,
   Renderer2,
   ElementRef,
   AfterViewInit,
   Output,
   EventEmitter,
   OnDestroy
} from '@angular/core';
import { LayoutSandbox } from '@shared/layouts/layouts.sandbox';
import { isArray } from 'util';
import { Subscription } from 'rxjs/Subscription';
@Component({
   selector: 'rmhub-right-sidebar',
   templateUrl: './right-sidebar.component.html',
   styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarsComponent implements AfterViewInit, OnDestroy {

   @Input() isNavbar: boolean;
   @Output() clickItem: EventEmitter<any> = new EventEmitter<any>();
   popoverVisible = false;
   popoverSelectedActionsData: Array<any> = [];
   allowDeleting: Boolean = true;
   deleteType: String = 'static';
   selectionMode: String = 'single';
   height: any = 'auto';
   iconUrl: any = 'assets/icon/';
   private subscriptions: Subscription[] = [];
   constructor(
      private renderer: Renderer2,
      public layoutSandbox: LayoutSandbox
   ) { }

   ngAfterViewInit(): void {
      this.registerEvents();
   }
   ngOnDestroy() {
      this.unregisterEvents();
   }
   registerEvents() {
      this.subscriptions.push(this.layoutSandbox.selectedAction$.subscribe(datas => {
      }));
   }
   unregisterEvents() {
      this.subscriptions.forEach(sub => sub.unsubscribe());
   }
}

