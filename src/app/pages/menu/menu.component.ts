import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private productService: ProductService, private viewportScroller: ViewportScroller) {}

  getProducts(category: string): string[] {
    return this.productService.getProductsIdByCategory(category);
  }

  scroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  showDetails(product: Product) {
    this.selectedProduct = product;
    this.showProductDetail = true;
  }

  show(itemId: string): boolean {
    return !this.productService.isOnPoints(itemId);
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