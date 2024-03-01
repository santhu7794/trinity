import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DECEComponent } from './dece.component';

describe('DECEComponent', () => {
  let component: DECEComponent;
  let fixture: ComponentFixture<DECEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DECEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DECEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
