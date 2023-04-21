import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent {

  @Input() page!: Page;

  constructor(private router: Router) {}

  goToPage() {
    this.router.navigate([this.page.router_link]);
  }  
}