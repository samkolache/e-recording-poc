import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ERecordingReviewCardComponent } from '../e-recording-review-card/e-recording-review-card.component';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

const DOC_TABS = ['DEED OF TRUST', 'MORTGAGE', 'POWER OF ATTORNEY'];

@Component({
  selector: 'app-e-recording-san-diego-page',
  standalone: true,
  imports: [CommonModule, ERecordingReviewCardComponent, PdfViewerComponent],
  template: `
    <main class="e-recording-container">
      <div class="row h-100 g-0">
        <div class="col-md-6 h-100">
          @defer (on idle) {
            <app-pdf-viewer [documentUrl]="'assets/test-pdf.pdf'" [navigateTo]="pdfPage" />
          }
        </div>
        <div class="col-md-6 h-100 d-flex flex-column">
          <app-e-recording-review-card
            presetState="CA"
            presetCounty="san-diego-county"
            [docTabs]="tabs"
            (sourceClicked)="pdfPage = $event"
            class="flex-grow-1"
          />
        </div>
      </div>
    </main>
  `,
  styles: [`
    .e-recording-container {
      height: 100vh;
      overflow: hidden;
    }
  `]
})
export class ERecordingSanDiegoPageComponent {
  readonly tabs = DOC_TABS;
  pdfPage = 1;
}
