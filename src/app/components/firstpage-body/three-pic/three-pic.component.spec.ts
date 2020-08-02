import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePicComponent } from './three-pic.component';

describe('ThreePicComponent', () => {
  let component: ThreePicComponent;
  let fixture: ComponentFixture<ThreePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
