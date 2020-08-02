import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPicComponent } from './two-pic.component';

describe('TwoPicComponent', () => {
  let component: TwoPicComponent;
  let fixture: ComponentFixture<TwoPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
