import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionandMissionComponent } from './visionand-mission.component';

describe('VisionandMissionComponent', () => {
  let component: VisionandMissionComponent;
  let fixture: ComponentFixture<VisionandMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionandMissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisionandMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
