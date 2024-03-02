import { Routes } from '@angular/router';
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
import { CRITERIA1Component } from './criteria-1/criteria-1.component';

export const routes: Routes = [{ path:"home",component:HomeComponent},
{path:"founder",component:FounderComponent},
{path:"chairman",component:ChairmanComponent},
{path:"principal",component:PrincipalComponent},
{path:"director-acadmics",component:DirectorAcadmicsComponent},
{path:"administrative-officer",component:AdministrativeOfficerComponent},
{path:"visionand-mission",component:VisionandMissionComponent},
{path:"academic-Calender",component:AcademicCalenderComponent},
{path:"academic-regulations",component:AcademicRegulationsComponent},
{path:"eee",component:EEEComponent},
{path:"Head-of-department",component:HeadOfDepartmentComponent},
{path:"admission-procedure",component:AdmissionProcedureComponent},
{path:"gallery" ,component:GalleryComponent},
{path:"contact", component:ContactComponent},
{path:"ece",component:ECEComponent},
{path:"cse",component:CSEComponent},
{path:"aiml",component:AIMLComponent},
{path:"hs",component:HSComponent},
{path:"mba",component:MBAComponent},
{path:"deee",component:DEEEComponent},
{path:"dece",component:DECEComponent},
{path:"dcse",component:DCSEComponent},
{path:"placement",component:PlacementComponent},
{path:"tpo",component:TPOComponent},
{path:"criteria-1",component:CRITERIA1Component}

];
