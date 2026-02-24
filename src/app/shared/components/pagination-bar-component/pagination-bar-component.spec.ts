import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBarComponent } from './pagination-bar-component';

describe('PaginationBarComponent', () => {
  let component: PaginationBarComponent;
  let fixture: ComponentFixture<PaginationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
