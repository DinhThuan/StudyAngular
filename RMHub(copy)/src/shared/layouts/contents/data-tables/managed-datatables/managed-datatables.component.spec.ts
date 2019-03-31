import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedDatatablesComponent } from './managed-datatables.component';

describe('ManagedDatatablesComponent', () => {
  let component: ManagedDatatablesComponent;
  let fixture: ComponentFixture<ManagedDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
