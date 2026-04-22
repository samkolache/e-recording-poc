import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ERecordingPageComponent } from './components/e-recording-page/e-recording-page.component';
import { ERecordingPrincePageComponent } from './components/e-recording-prince-page/e-recording-prince-page.component';
import { ERecordingSanDiegoPageComponent } from './components/e-recording-san-diego-page/e-recording-san-diego-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'e-recording', component: ERecordingPageComponent },
  { path: 'e-recording-prince', component: ERecordingPrincePageComponent },
  { path: 'e-recording-san-diego', component: ERecordingSanDiegoPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
