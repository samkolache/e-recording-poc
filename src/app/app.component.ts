import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RuleValidationCardComponentNew } from './components/rule-validation-card/rule-validation-card.component';
import { RuleValidationCardNewComponent } from './components/rule-validation-card-new/rule-validation-card-new.component';
import { RuleValidationCardNew2Component } from './components/rule-validation-card-new-2/rule-validation-card-new-2.component';
import { RuleValidationCardNew3Component } from './components/rule-validation-card-new-3/rule-validation-card-new-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RuleValidationCardComponentNew, RuleValidationCardNewComponent, RuleValidationCardNew2Component, RuleValidationCardNew3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-agentic-workflow';
}
