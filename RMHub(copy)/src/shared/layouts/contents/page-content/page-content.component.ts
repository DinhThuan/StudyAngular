import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'rmhub-page-content',
   templateUrl: './page-content.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContentComponent {
   constructor() { }
}
