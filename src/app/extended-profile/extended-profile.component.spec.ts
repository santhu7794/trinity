import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedProfileComponent } from './extended-profile.component';

describe('ExtendedProfileComponent', () => {
  let component: ExtendedProfileComponent;
  let fixture: ComponentFixture<ExtendedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
