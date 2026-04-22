import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERecordingReviewCardComponent } from '../e-recording-review-card/e-recording-review-card.component';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

const DOC_TABS = ['DEED OF TRUST', 'MORTGAGE', 'POWER OF ATTORNEY'];

@Component({
  selector: 'app-e-recording-prince-page',
  standalone: true,
  imports: [CommonModule, ERecordingReviewCardComponent, PdfViewerComponent],
  templateUrl: './e-recording-prince-page.component.html',
  styleUrl: './e-recording-prince-page.component.scss'
})
export class ERecordingPrincePageComponent {
  readonly tabs = DOC_TABS;
  selectedTab: string = DOC_TABS[0];
  pdfPage = 1;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
