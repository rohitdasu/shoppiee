import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatTopWearComponent } from './cat-top-wear.component';

describe('CatTopWearComponent', () => {
  let component: CatTopWearComponent;
  let fixture: ComponentFixture<CatTopWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTopWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTopWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
