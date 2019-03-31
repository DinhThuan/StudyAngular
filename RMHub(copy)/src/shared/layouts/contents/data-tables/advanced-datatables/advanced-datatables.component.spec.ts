import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDatatablesComponent } from './advanced-datatables.component';

describe('AdvancedDatatablesComponent', () => {
  let component: AdvancedDatatablesComponent;
  let fixture: ComponentFixture<AdvancedDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
