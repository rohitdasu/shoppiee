import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePicComponent } from './one-pic.component';

describe('OnePicComponent', () => {
  let component: OnePicComponent;
  let fixture: ComponentFixture<OnePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
