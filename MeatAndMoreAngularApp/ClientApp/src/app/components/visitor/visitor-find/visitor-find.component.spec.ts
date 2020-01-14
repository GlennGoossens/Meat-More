import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFindComponent } from './visitor-find.component';

describe('VisitorFindComponent', () => {
  let component: VisitorFindComponent;
  let fixture: ComponentFixture<VisitorFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
