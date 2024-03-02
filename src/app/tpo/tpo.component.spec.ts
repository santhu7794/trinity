import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPOComponent } from './tpo.component';

describe('TPOComponent', () => {
  let component: TPOComponent;
  let fixture: ComponentFixture<TPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
