import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSignoffComponent } from './visitor-signoff.component';

describe('VisitorSignoffComponent', () => {
  let component: VisitorSignoffComponent;
  let fixture: ComponentFixture<VisitorSignoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorSignoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSignoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
