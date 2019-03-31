import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthorizeModule } from '@shared/authorize/authorize.module';
import { SharedComponentModule } from '@shared/components/shared-component.module';
import { ScrollEventDirective } from '@shared/directives/scroll.directive';
import { FooterComponent } from '@shared/layouts/footer/footer.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PageContentComponent } from './contents/page-content/page-content.component';
import { TopMenuComponent } from './headers/top-menu/top-menu.component';
import { HorizontalNavComponent } from './headers/horizontal-nav/horizontal-nav.component';
import { LanguagesComponent } from './headers/languages/languages.component';
import { NotificationBoxComponent } from './headers/notification-box/notification-box.component';
import { ProfileBarComponent } from './headers/profile-bar/profile-bar.component';
import { LayoutsComponent } from './layouts.component';
import { LayoutSandbox } from './layouts.sandbox';
import { LayoutsAdapterService } from './layoutsAdapter.service';
import { LayoutsApiClientServices } from './layoutsApiClient.services';
import { LeftSidebarsComponent } from './left-sidebars/left-sidebars.component';
import { ModuleConfigModule } from './left-sidebars/module-config/module-config.module';
import { PopoverListComponent } from './popoverList/popoverList.component';
import { HeadersComponent } from './headers/headers.component';
import { RightSidebarsComponent } from './right-sidebar/right-sidebar.component';
import { FormsModule } from '@angular/forms';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { DashboardModule } from './contents/dashboard/dashboard.module';

const DxUiModule = [
];

const SHARED_LAYOUT_COMPONENTS = [
   LayoutsComponent,
   PageContentComponent,
   LeftSidebarsComponent,
   TopMenuComponent,
   FooterComponent,
   LanguagesComponent,
   HorizontalNavComponent,
   NotificationBoxComponent,
   ProfileBarComponent,
   PopoverListComponent,
   ScrollEventDirective,
   HeadersComponent,
   RightSidebarsComponent
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      DxUiModule,
      SimpleNotificationsModule,
      TranslateModule,
      SharedComponentModule,
      AuthorizeModule.forFeature(),
      ModuleConfigModule,
      FormsModule,
      LayoutsRoutingModule,
      DashboardModule
   ],
   declarations: [SHARED_LAYOUT_COMPONENTS, PageContentComponent],
   exports: [SHARED_LAYOUT_COMPONENTS],
})

export class LayoutContainersModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: LayoutContainersModule,
         providers: [
            LayoutSandbox,
            LayoutsApiClientServices,
            LayoutsAdapterService]
      };
   }
}
