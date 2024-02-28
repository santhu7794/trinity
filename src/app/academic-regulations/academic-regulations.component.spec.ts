import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicRegulationsComponent } from './academic-regulations.component';

describe('AcademicRegulationsComponent', () => {
  let component: AcademicRegulationsComponent;
  let fixture: ComponentFixture<AcademicRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicRegulationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
