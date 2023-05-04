import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private userService: UserService, private shoppingCartService: ShoppingCartService, private itemService: ProductService) {}

  isShoppingCart(): boolean {
    return this.userService.user != null;
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
}