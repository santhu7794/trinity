import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criteria1dComponent } from './criteria1d.component';

describe('Criteria1dComponent', () => {
  let component: Criteria1dComponent;
  let fixture: ComponentFixture<Criteria1dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criteria1dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Criteria1dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
