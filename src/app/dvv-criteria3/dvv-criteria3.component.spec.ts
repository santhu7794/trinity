import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvvCriteria3Component } from './dvv-criteria3.component';

describe('DvvCriteria3Component', () => {
  let component: DvvCriteria3Component;
  let fixture: ComponentFixture<DvvCriteria3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvvCriteria3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvvCriteria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
