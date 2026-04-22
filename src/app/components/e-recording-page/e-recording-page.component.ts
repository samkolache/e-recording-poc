import { Component } from '@angular/core';
import { ERecordingReviewCardComponent } from '../e-recording-review-card/e-recording-review-card.component';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-e-recording-page',
  standalone: true,
  imports: [ERecordingReviewCardComponent, PdfViewerComponent],
  template: `
    <main class="e-recording-container">
      <div class="row h-100 g-0">
        <div class="col-md-6 h-100">
          @defer (on idle) {
            <app-pdf-viewer [documentUrl]="'assets/test-pdf.pdf'" [navigateTo]="pdfPage" />
          }
        </div>
        <div class="col-md-6 h-100 d-flex flex-column">
          <app-e-recording-review-card (sourceClicked)="pdfPage = $event" />
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
export class ERecordingPageComponent {
  pdfPage = 1;
}
