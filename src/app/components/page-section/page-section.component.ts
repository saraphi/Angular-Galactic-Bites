import { Component, Input } from '@angular/core';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent {

  @Input() page!: Page;
  
}