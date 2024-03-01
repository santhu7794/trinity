import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCSEComponent } from './dcse.component';

describe('DCSEComponent', () => {
  let component: DCSEComponent;
  let fixture: ComponentFixture<DCSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DCSEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DCSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
