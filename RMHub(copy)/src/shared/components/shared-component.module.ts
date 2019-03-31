import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { AppEnums } from '@shared/AppEnum';
import { PipesModule } from '@shared/pipes/pipes.module';
import { CanDeactivateComponent } from './can-deactivate/can-deactivate.component';
import { PrinterComponent } from './printer/printer.component';
import { ProgressbarComponent } from './progress-bar/progressbar.component';
import { RemainingMessageComponent } from './remaining-message/remaining-message.component';
import { TimeagoModule } from 'ngx-timeago';

const DxUiModule = [
];

const SHARED_COMPONENTS = [
  PrinterComponent,
  CanDeactivateComponent,
  ProgressbarComponent,
  RemainingMessageComponent,
];
@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DxUiModule,
    TimeagoModule,
    TranslateModule,
  ],
  declarations: [SHARED_COMPONENTS],
  exports: [SHARED_COMPONENTS, TimeagoModule],
  providers: [
  ]
})
export class SharedComponentModule {
}
