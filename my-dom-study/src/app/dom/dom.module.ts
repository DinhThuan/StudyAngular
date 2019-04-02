import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomRoutingModule } from './dom-routing.module';
import { DemoDomComponent } from './demo-dom/demo-dom.component';

@NgModule({
  declarations: [DemoDomComponent],
  imports: [
    CommonModule,
    DomRoutingModule
  ],
  exports: [DemoDomComponent]
})
export class DomModule { }
