import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCartComponent } from './compare-cart.component';

describe('CompareCartComponent', () => {
  let component: CompareCartComponent;
  let fixture: ComponentFixture<CompareCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
