import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';

@NgModule({
   imports: [
      CommonModule,
      DashboardRoutingModule
   ],
   declarations: [DefaultDashboardComponent],
   exports: [DefaultDashboardComponent]
})
export class DashboardModule { }
