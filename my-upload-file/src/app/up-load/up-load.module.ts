import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpLoadRoutingModule } from './up-load-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    UpLoadRoutingModule
  ],
  exports: [FormComponent]
})
export class UpLoadModule { }
