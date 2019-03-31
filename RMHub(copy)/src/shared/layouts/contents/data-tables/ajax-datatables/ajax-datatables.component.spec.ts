import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDatatablesComponent } from './ajax-datatables.component';

describe('AjaxDatatablesComponent', () => {
  let component: AjaxDatatablesComponent;
  let fixture: ComponentFixture<AjaxDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
