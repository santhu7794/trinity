import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBAComponent } from './mba.component';

describe('MBAComponent', () => {
  let component: MBAComponent;
  let fixture: ComponentFixture<MBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MBAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
