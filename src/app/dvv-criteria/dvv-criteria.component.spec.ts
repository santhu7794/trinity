import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvvCriteriaComponent } from './dvv-criteria.component';

describe('DvvCriteriaComponent', () => {
  let component: DvvCriteriaComponent;
  let fixture: ComponentFixture<DvvCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvvCriteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvvCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
