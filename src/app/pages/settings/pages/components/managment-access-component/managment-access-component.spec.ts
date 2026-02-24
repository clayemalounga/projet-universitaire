import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentAccessComponent } from './managment-access-component';

describe('ManagmentAccessComponent', () => {
  let component: ManagmentAccessComponent;
  let fixture: ComponentFixture<ManagmentAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagmentAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagmentAccessComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
