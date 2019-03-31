import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutsRoutingModule } from './page-layouts-routing.module';
import { DashboardMegaMenuComponent } from './dashboard-mega-menu/dashboard-mega-menu.component';

@NgModule({
   imports: [
      CommonModule,
      PageLayoutsRoutingModule
   ],
   declarations: [DashboardMegaMenuComponent]
})
export class PageLayoutsModule { }
