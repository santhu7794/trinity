import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import bootstrap from '../main.server';
import { HomeComponent } from './home/home.component';
import { FounderComponent } from './founder/founder.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { PrincipalComponent } from './principal/principal.component';
import { DirectorAcadmicsComponent } from './director-acadmics/director-acadmics.component';
import { AdministrativeOfficerComponent } from './administrative-officer/administrative-officer.component';
import { VisionandMissionComponent } from './visionand-mission/visionand-mission.component';
import { AcademicCalenderComponent } from './academic-calender/academic-calender.component';
import { AcademicRegulationsComponent } from './academic-regulations/academic-regulations.component';
import { EEEComponent } from './eee/eee.component';
import { HeadOfDepartmentComponent } from './head-of-department/head-of-department.component';
import { AdmissionProcedureComponent } from './admission-procedure/admission-procedure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ECEComponent } from './ece/ece.component';
import { CSEComponent } from './cse/cse.component';
import { AIMLComponent } from './aiml/aiml.component';
import { HSComponent } from './hs/hs.component';
import { MBAComponent } from './mba/mba.component';
import { DEEEComponent } from './deee/deee.component';
import { DECEComponent } from './dece/dece.component';
import { DCSEComponent } from './dcse/dcse.component';
import { PlacementComponent } from './placement/placement.component';
import { TPOComponent } from './tpo/tpo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,
    HomeComponent,
    FounderComponent, ChairmanComponent, PrincipalComponent,
    DirectorAcadmicsComponent, AdministrativeOfficerComponent, VisionandMissionComponent,
    AcademicCalenderComponent, AcademicRegulationsComponent, EEEComponent,
    HeadOfDepartmentComponent, AdmissionProcedureComponent, GalleryComponent,
    ContactComponent, ECEComponent, CSEComponent,AIMLComponent,HSComponent,MBAComponent,DEEEComponent,DECEComponent,
  DCSEComponent,PlacementComponent,TPOComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college';

}
