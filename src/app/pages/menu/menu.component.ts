import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: string[] = [Category.main, Category.complement, Category.drink, Category.dessert];

  constructor(private productService: ProductService, private viewportScroller: ViewportScroller) {}

  getProducts(category: string): string[] {
    return this.productService.getProdutsIdByCategory(category);
  }

  scroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}