import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDatatablesComponent } from './responsive-datatables.component';

describe('ResponsiveDatatablesComponent', () => {
  let component: ResponsiveDatatablesComponent;
  let fixture: ComponentFixture<ResponsiveDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
