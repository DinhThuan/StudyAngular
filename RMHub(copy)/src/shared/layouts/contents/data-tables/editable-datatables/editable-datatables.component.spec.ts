import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableDatatablesComponent } from './editable-datatables.component';

describe('EditableDatatablesComponent', () => {
  let component: EditableDatatablesComponent;
  let fixture: ComponentFixture<EditableDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
