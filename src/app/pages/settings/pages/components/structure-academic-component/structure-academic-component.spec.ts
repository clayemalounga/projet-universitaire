import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAcademicComponent } from './structure-academic-component';

describe('StructureAcademicComponent', () => {
  let component: StructureAcademicComponent;
  let fixture: ComponentFixture<StructureAcademicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureAcademicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureAcademicComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
