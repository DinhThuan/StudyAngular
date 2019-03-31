import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatUiColorsComponent } from './flat-ui-colors.component';

describe('FlatUiColorsComponent', () => {
  let component: FlatUiColorsComponent;
  let fixture: ComponentFixture<FlatUiColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatUiColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatUiColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
