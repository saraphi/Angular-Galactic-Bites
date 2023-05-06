import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit {
  images: string[] = 
  [
    'https://static.kfc.es/images/content/home/carousel/lg/chollazo.jpg?v=30k25g', 
    'https://images.getduna.com/ucrmq9mk2ej1277f0v2gbe8pjir4.jpg', 
    'https://static.kfc.es/images/content/home/carousel/lg/losmalditos.jpg?v=30k25g',
    'https://brand-uk.assets.kfc.co.uk/2023-04/W4_23_WEBSITE_CAROUSEL_DESKTOP_HW_2000X650.jpg?VersionId=zRmEv456lu__2T2vW5GaywBXGZEIlKK8'
  ];

  position: number = 0;
  url: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.updateUrl();
  }

  private updateUrl() {
    this.url = this.images[this.position];
    console.log('position:', this.position, 'img:', this.url)
  }

  moveLeft() {
    this.position = ((this.position > 0) ? this.position : this.images.length) - 1;
    this.updateUrl();
  }

  moveRight() {
    this.position = ((this.position < this.images.length - 1) ? this.position : -1) + 1;
    this.updateUrl();
  }
}