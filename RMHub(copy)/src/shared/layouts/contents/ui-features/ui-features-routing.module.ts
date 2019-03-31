import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopoverConfirmationsComponent } from './popover-confirmations/popover-confirmations.component';
import { FontIconsComponent } from './font-icons/font-icons.component';
import { FlatUiColorsComponent } from './flat-ui-colors/flat-ui-colors.component';
import { TypographyComponent } from './typography/typography.component';
import { TabsAccordionsNavsComponent } from './tabs-accordions-navs/tabs-accordions-navs.component';

const routes: Routes = [
   {
      path: '',
      children: [
         { path: 'buttons', component: ButtonsComponent },
         { path: 'popover-confirmations', component: PopoverConfirmationsComponent },
         { path: 'font-icons', component: FontIconsComponent },
         { path: 'flat-ui-colors', component: FlatUiColorsComponent },
         { path: 'typography', component: TypographyComponent },
         { path: 'tabs-accordions-navs', component: TabsAccordionsNavsComponent },
      ]
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class UiFeaturesRoutingModule { }
