import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNewComponent } from './visitor-new.component';

describe('VisitorNewComponent', () => {
  let component: VisitorNewComponent;
  let fixture: ComponentFixture<VisitorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
