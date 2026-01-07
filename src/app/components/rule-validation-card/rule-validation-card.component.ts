import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RuleItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-rule-validation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-validation-card.component.html',
  styleUrls: ['./rule-validation-card.component.scss']
})
export class RuleValidationCardComponentNew {
  @Input() cardTitle: string = 'Rules';
  @Input() rules: RuleItem[] = [
    {
      title: 'Full Legal Description Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      title: 'Borrower\'s Name Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Full Legal Description Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      title: 'Borrower\'s Name Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  onThumbsUp(): void {
    console.log('Thumbs up clicked');
    // Implement feedback logic
  }

  onThumbsDown(): void {
    console.log('Thumbs down clicked');
    // Implement feedback logic
  }
}
