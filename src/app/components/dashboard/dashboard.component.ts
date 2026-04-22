import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ERecordingRow {
  orderNumber: string;
  route: string;
  sentERecord: string;
  actualDisbursementDate: string;
  documentName: string;
  clientName: string;
  clientId: string;
  state: string;
  county: string;
  sentERecordBy: string;
  autoSubmissionStatus: string;
  autoSubmissionStatusType: 'danger' | 'gray';
  location: string;
  provider: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  rows: ERecordingRow[] = [
    {
      orderNumber: '2004749186',
      route: '/e-recording-prince',
      sentERecord: '01/27/2026',
      actualDisbursementDate: '01/27/2026',
      documentName: 'Mortgage',
      clientName: 'Penny Mac Lender',
      clientId: '4698',
      state: 'MD',
      county: "Prince George's County",
      sentERecordBy: '-',
      autoSubmissionStatus: 'Data Extraction Failed',
      autoSubmissionStatusType: 'danger',
      location: 'In House',
      provider: 'Simplifile'
    },
    {
      orderNumber: '2004749186',
      route: '/e-recording-san-diego',
      sentERecord: '01/27/2026',
      actualDisbursementDate: '01/27/2026',
      documentName: 'Mortgage',
      clientName: 'Penny Mac Lender',
      clientId: '4698',
      state: 'AZ',
      county: 'Maricopa',
      sentERecordBy: '-',
      autoSubmissionStatus: 'Validation Failed',
      autoSubmissionStatusType: 'danger',
      location: 'In House',
      provider: 'Simplifile'
    }
  ];
}
