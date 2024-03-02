import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRITERIA1Component } from './criteria-1.component';

describe('CRITERIA1Component', () => {
  let component: CRITERIA1Component;
  let fixture: ComponentFixture<CRITERIA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRITERIA1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRITERIA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
