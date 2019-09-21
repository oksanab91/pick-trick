import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNavbarOverlayComponent } from './filter-navbar-overlay.component';

describe('FilterNavbarOverlayComponent', () => {
  let component: FilterNavbarOverlayComponent;
  let fixture: ComponentFixture<FilterNavbarOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterNavbarOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNavbarOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
