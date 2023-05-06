import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent {

  @Input() name: string = '';
  @Input() img: string = '';
  @Input() fragment: string = '';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  goToPage() {
    this.router.navigate(['/offers'], { fragment: this.fragment }).then(() => {
      this.viewportScroller.scrollToAnchor(this.fragment);
    });
  }  
}