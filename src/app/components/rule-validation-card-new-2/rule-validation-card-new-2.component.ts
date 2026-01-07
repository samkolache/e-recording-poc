import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RuleItem {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-rule-validation-card-new-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-validation-card-new-2.component.html',
  styleUrls: ['./rule-validation-card-new-2.component.scss']
})
export class RuleValidationCardNew2Component {
  @Input() headerTitle: string = 'Rules';
  @Input() rules: RuleItem[] = [
    {
      id: '1',
      title: 'Full Legal Description Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      id: '2',
      title: 'Borrower\'s Name Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '3',
      title: 'Full Legal Description Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      id: '4',
      title: 'Borrower\'s Name Requirement',
      description: 'Rule description here lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];
  @Input() showFeedback: boolean = true;

  onLike(): void {
    // Handle like action
    console.log('Like clicked');
  }

  onDislike(): void {
    // Handle dislike action
    console.log('Dislike clicked');
  }
}
