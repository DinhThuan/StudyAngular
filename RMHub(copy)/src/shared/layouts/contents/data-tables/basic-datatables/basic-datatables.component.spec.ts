import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatatablesComponent } from './basic-datatables.component';

describe('BasicDatatablesComponent', () => {
  let component: BasicDatatablesComponent;
  let fixture: ComponentFixture<BasicDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
