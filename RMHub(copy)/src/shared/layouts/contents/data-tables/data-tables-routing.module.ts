import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDatatablesComponent } from './basic-datatables/basic-datatables.component';
import { TreeDatatablesComponent } from './tree-datatables/tree-datatables.component';
import { ResponsiveDatatablesComponent } from './responsive-datatables/responsive-datatables.component';
import { ManagedDatatablesComponent } from './managed-datatables/managed-datatables.component';
import { EditableDatatablesComponent } from './editable-datatables/editable-datatables.component';
import { AdvancedDatatablesComponent } from './advanced-datatables/advanced-datatables.component';
import { AjaxDatatablesComponent } from './ajax-datatables/ajax-datatables.component';

const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'basic-datatables', component: BasicDatatablesComponent },
         { path: 'tree-datatables', component: TreeDatatablesComponent },
         { path: 'responsive-datatables', component: ResponsiveDatatablesComponent },
         { path: 'managed-datatables', component: ManagedDatatablesComponent },
         { path: 'editable-datatables', component: EditableDatatablesComponent },
         { path: 'advanced-datatables', component: AdvancedDatatablesComponent },
         { path: 'ajax-datatables', component: AjaxDatatablesComponent },
      ]
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DataTablesRoutingModule { }
