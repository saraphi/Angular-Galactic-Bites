import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {

  selectedProduct: Product | null = null;
  showProductDetail: boolean = false;

  discountedBanner: string[] = [
    'https://static.kfc.es/images/content/home/carousel/lg/chollazo.jpg?v=30k25g', 
    'https://images.getduna.com/ucrmq9mk2ej1277f0v2gbe8pjir4.jpg', 
    'https://static.kfc.es/images/content/home/carousel/lg/losmalditos.jpg?v=30k25g',
    'https://brand-uk.assets.kfc.co.uk/2023-04/W4_23_WEBSITE_CAROUSEL_DESKTOP_HW_2000X650.jpg?VersionId=zRmEv456lu__2T2vW5GaywBXGZEIlKK8'
  ];

  constructor(private router: Router, private productService: ProductService) {}

  discounted(): string[] {
    return this.productService.getProductsOnDiscount();
  }

  points(): string[] {
    return this.productService.getProductsOnPoints();
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
    this.showProductDetail = true;
  }

  goToLogin() {
    this.hideOverlay();
    this.router.navigate(['/login']);
  }

  hideOverlay() {
    if (!this.showProductDetail) return;
    this.showProductDetail = false;
    this.selectedProduct = null;
  }
}