import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
/**
 * register provider services
 */
import { AppSandbox } from '@app/app.sandbox';
import { AppApiClient } from '@app/appApiClient.service';
import { AppService } from '@app/app.service';

export function configLocalizationFactory() {
  const currentLang = localStorage.getItem('currentLang.Culture') || 'de-CH';
  const lang = currentLang.substring(0, 2);
  return () => {
  };
}

@NgModule({
  imports: [],
  declarations: []
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: configLocalizationFactory,
          multi: true
        },
        AppSandbox,
        AppApiClient,
        AppService
      ],
    };
  }
} 
