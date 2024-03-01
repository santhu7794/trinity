import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEEEComponent } from './deee.component';

describe('DEEEComponent', () => {
  let component: DEEEComponent;
  let fixture: ComponentFixture<DEEEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DEEEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DEEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
