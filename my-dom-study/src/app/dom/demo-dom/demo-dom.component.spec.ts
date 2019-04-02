import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDomComponent } from './demo-dom.component';

describe('DemoDomComponent', () => {
  let component: DemoDomComponent;
  let fixture: ComponentFixture<DemoDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
