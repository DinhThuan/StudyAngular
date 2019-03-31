import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards/auth.guard';
import { CanDeactivateGuard } from '@shared/guards/canDeactivate.guard';
import { LayoutsComponent } from '@shared/layouts/layouts.component';
import { PopoverListComponent } from '@shared/layouts/popoverList/popoverList.component';
import { LayoutContainersModule } from '@shared/layouts/layouts.module';
import { UiFeaturesModule } from '@shared/layouts/contents/ui-features/ui-features.module';
import { DefaultDashboardComponent } from '@shared/layouts/contents/dashboard/default-dashboard/default-dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './shared/layouts/layouts.module#LayoutContainersModule',
    component: LayoutsComponent
  },
  {
    path: 'home',
    component: LayoutsComponent
  },
  {
    path: 'login',
    loadChildren: './app/auth/auth.module#AuthModule', // Lazy load auth module
    data: { preload: true }
  },
  { path: '**', redirectTo: '/exception/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard, CanDeactivateGuard]
})
export class RootRoutingModule { }


