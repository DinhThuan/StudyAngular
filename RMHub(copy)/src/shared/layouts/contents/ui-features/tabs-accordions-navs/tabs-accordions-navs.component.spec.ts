import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAccordionsNavsComponent } from './tabs-accordions-navs.component';

describe('TabsAccordionsNavsComponent', () => {
  let component: TabsAccordionsNavsComponent;
  let fixture: ComponentFixture<TabsAccordionsNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAccordionsNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAccordionsNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
