import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpageBodyComponent } from './firstpage-body.component';

describe('FirstpageBodyComponent', () => {
  let component: FirstpageBodyComponent;
  let fixture: ComponentFixture<FirstpageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
