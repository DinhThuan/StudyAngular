import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from '@shared/asyncServices/http';
import { UiFeaturesModule } from './contents/ui-features/ui-features.module';
import { DefaultDashboardComponent } from './contents/dashboard/default-dashboard/default-dashboard.component';


const routes: Routes = [
   {
      path: 'dashboard',
      children: [
         { path: 'default', component: DefaultDashboardComponent },
      ]
   },
   {
      path: 'ui-features',
      loadChildren: () => UiFeaturesModule,
      data: { preload: true }
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LayoutsRoutingModule { }
