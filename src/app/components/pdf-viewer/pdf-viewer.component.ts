import { Component, Input } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.scss'
})
export class PdfViewerComponent {
  @Input() documentUrl: string = '';
  @Input() set navigateTo(page: number) { if (page) this.pageNumber = page; }

  zoom: string = 'auto';
  pageNumber: number = 1;



  zoomInAndOut(parameter: string) {
    if (this.zoom === 'auto') {
      this.zoom = '100%';
    }
    
    let currentZoom = parseInt(this.zoom.replace('%', ''), 10);
    if (parameter === 'in') {
      currentZoom = currentZoom + 25;
    } else {
      currentZoom = currentZoom - 25;
    }
    this.zoom = currentZoom + '%';
  }
}