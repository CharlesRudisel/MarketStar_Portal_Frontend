import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import { AvailableAssignmentsComponent } from './available-assignments/available-assignments.component';
import { PendingAssignmentsComponent } from './pending-assignments/pending-assignments.component';
import { CompletedAssignmentsComponent } from './completed-assignments/completed-assignments.component';
import { MyAssignmentsComponent } from './my-assignments/my-assignments.component';
import { CompanyBackgroundsComponent } from './company-backgrounds/company-backgrounds.component';
import { GradesComponent } from './grades/grades.component';
import { WriterSuccessComponent } from './writer-success/writer-success.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { FileListComponent } from './file-list/file-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'available-assignments', component: AvailableAssignmentsComponent },
  { path: 'pending-assignments', component: PendingAssignmentsComponent },
  { path: 'completed-assignments', component: CompletedAssignmentsComponent },
  { path: 'my-assignments', component: MyAssignmentsComponent },
  { path: 'company-backgrounds', component: CompanyBackgroundsComponent  },
  { path: 'UploadButtonComponent ', component: UploadButtonComponent  },
  { path: 'grades', component: GradesComponent },
  { path: 'fileListComponent', component: FileListComponent },
  { path: 'writer-success', component: WriterSuccessComponent },
  { path: 'fileListComponent/:clientId', component: FileListComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
