import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProgress } from './dynamic-progress';

describe('DynamicProgress', () => {
  let component: DynamicProgress;
  let fixture: ComponentFixture<DynamicProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicProgress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
