import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private itemService: ProductService) {}

  isShoppingCart(): boolean {
    return this.shoppingCartService.isShoppingCart();
  }

  getItemsKeys(): string[] {
    let itemsKeys: string[] = [];
    if (this.shoppingCartService.shoppingCart) itemsKeys = this.shoppingCartService.getItemsKeys(); 
    return itemsKeys;
  }

  getItemById(itemId: string): Product | null {
    let itemsKeys: string[] = this.getItemsKeys();
    if (itemsKeys.includes(itemId)) return this.itemService.getItem(itemId);
    else return null;
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice();
  }

  onBuy(): void {
    this.router.navigate(['payment']);
  }
}