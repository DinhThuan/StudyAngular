import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopoverConfirmationsComponent } from './popover-confirmations/popover-confirmations.component';
import { FontIconsComponent } from './font-icons/font-icons.component';
import { FlatUiColorsComponent } from './flat-ui-colors/flat-ui-colors.component';
import { TypographyComponent } from './typography/typography.component';
import { TabsAccordionsNavsComponent } from './tabs-accordions-navs/tabs-accordions-navs.component';

@NgModule({
   imports: [
      CommonModule,
      UiFeaturesRoutingModule
   ],
   declarations: [ButtonsComponent, PopoverConfirmationsComponent, FontIconsComponent, FlatUiColorsComponent, TypographyComponent, TabsAccordionsNavsComponent]
})
export class UiFeaturesModule { }
