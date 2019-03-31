import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { BasicDatatablesComponent } from './basic-datatables/basic-datatables.component';
import { TreeDatatablesComponent } from './tree-datatables/tree-datatables.component';
import { ResponsiveDatatablesComponent } from './responsive-datatables/responsive-datatables.component';
import { ManagedDatatablesComponent } from './managed-datatables/managed-datatables.component';
import { EditableDatatablesComponent } from './editable-datatables/editable-datatables.component';
import { AdvancedDatatablesComponent } from './advanced-datatables/advanced-datatables.component';
import { AjaxDatatablesComponent } from './ajax-datatables/ajax-datatables.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesRoutingModule
  ],
  declarations: [BasicDatatablesComponent, TreeDatatablesComponent, ResponsiveDatatablesComponent, ManagedDatatablesComponent, EditableDatatablesComponent, AdvancedDatatablesComponent, AjaxDatatablesComponent]
})
export class DataTablesModule { }
