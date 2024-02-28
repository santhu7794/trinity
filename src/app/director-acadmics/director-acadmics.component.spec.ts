import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAcadmicsComponent } from './director-acadmics.component';

describe('DirectorAcadmicsComponent', () => {
  let component: DirectorAcadmicsComponent;
  let fixture: ComponentFixture<DirectorAcadmicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorAcadmicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectorAcadmicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
