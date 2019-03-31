import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverConfirmationsComponent } from './popover-confirmations.component';

describe('PopoverConfirmationsComponent', () => {
  let component: PopoverConfirmationsComponent;
  let fixture: ComponentFixture<PopoverConfirmationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverConfirmationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverConfirmationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
