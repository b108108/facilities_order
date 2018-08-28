import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesViewComponent } from './facilities-view.component';

describe('FacilitiesViewComponent', () => {
  let component: FacilitiesViewComponent;
  let fixture: ComponentFixture<FacilitiesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
