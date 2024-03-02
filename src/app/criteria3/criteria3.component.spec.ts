import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criteria3Component } from './criteria3.component';

describe('Criteria3Component', () => {
  let component: Criteria3Component;
  let fixture: ComponentFixture<Criteria3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criteria3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Criteria3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
