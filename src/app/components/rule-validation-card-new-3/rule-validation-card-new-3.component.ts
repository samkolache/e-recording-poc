import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RuleItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-rule-validation-card-new-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-validation-card-new-3.component.html',
  styleUrls: ['./rule-validation-card-new-3.component.scss']
})
export class RuleValidationCardNew3Component {
  @Input() headerTitle: string = 'Rules';
  @Input() ruleItems: RuleItem[] = [
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
  }

  onThumbsDown(): void {
    console.log('Thumbs down clicked');
  }
}
