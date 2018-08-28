import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundViewComponent } from './notfound-view.component';

describe('NotfoundViewComponent', () => {
  let component: NotfoundViewComponent;
  let fixture: ComponentFixture<NotfoundViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
