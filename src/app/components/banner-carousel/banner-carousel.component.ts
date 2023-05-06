import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {
  @Input() products: string[] = [];

  position: number = 0;
  url: string;

  ngOnInit(): void {
    console.log(this.products);
    this.updateUrl();
  }

  updateUrl() {
    this.url = this.products[this.position];
  }

  moveLeft() {
    this.position = ((this.position > 0) ? this.position : this.products.length) - 1;
    this.updateUrl();
  }

  moveRight() {
    this.position = ((this.position < this.products.length - 1) ? this.position : -1) + 1;
    this.updateUrl();
  }
}