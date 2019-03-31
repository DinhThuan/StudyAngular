import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDatatablesComponent } from './tree-datatables.component';

describe('TreeDatatablesComponent', () => {
  let component: TreeDatatablesComponent;
  let fixture: ComponentFixture<TreeDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
