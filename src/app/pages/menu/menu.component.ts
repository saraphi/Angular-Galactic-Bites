import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: string[] = [Category.main, Category.complement, Category.drink, Category.dessert];
  selectedProduct: Product | null = null;
  showProductDetail: boolean = false;

  constructor(private productService: ProductService, private viewportScroller: ViewportScroller) {}

  getProducts(category: string): string[] {
    return this.productService.getProdutsIdByCategory(category);
  }

  scroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
    this.showProductDetail = true;
  }

  hideOverlay() {
    if (!this.showProductDetail) return;
    this.showProductDetail = false;
    this.selectedProduct = null;
  }
}