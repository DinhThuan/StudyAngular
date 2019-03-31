import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TableRoutingModule } from './table-routing.module';
import { PersonComponent } from './person.component';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgxPaginationModule,
    // AngularFontAwesomeModule
  ],
  exports: [PersonComponent]
})
export class TableModule { }
