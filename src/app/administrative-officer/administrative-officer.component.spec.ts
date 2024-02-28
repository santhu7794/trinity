import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeOfficerComponent } from './administrative-officer.component';

describe('AdministrativeOfficerComponent', () => {
  let component: AdministrativeOfficerComponent;
  let fixture: ComponentFixture<AdministrativeOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeOfficerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
