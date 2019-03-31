import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMegaMenuComponent } from './dashboard-mega-menu.component';

describe('DashboardMegaMenuComponent', () => {
  let component: DashboardMegaMenuComponent;
  let fixture: ComponentFixture<DashboardMegaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMegaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMegaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
