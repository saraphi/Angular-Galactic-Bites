import { Injectable } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCart = { items: {'0': 1, '1': 2, '2': 1}, totalPrice: 0 };

  constructor(private userService: UserService, private itemService: ProductService) {}

  isShoppingCart(): boolean {
    return this.userService.isLogged() || this.getItemsKeys().length > 0;
  }

  getQuantity(itemId: string): number | null {
    return this.shoppingCart.items[itemId];
  }

  deleteItem(itemId: string): void {
    delete this.shoppingCart.items[itemId];
  }

  addItem(itemId: string): void {
    let quantity: number = 0;
    if (this.shoppingCart.items[itemId]) quantity = this.shoppingCart.items[itemId];
    this.shoppingCart.items[itemId] = quantity + 1;
  }

  removeItem(itemId: string): void {
    let quantity: number = 0;
    if (this.shoppingCart.items[itemId]) quantity = this.shoppingCart.items[itemId];
    this.shoppingCart.items[itemId] = quantity - 1;
    if (quantity - 1 == 0) this.deleteItem(itemId);
  }

  getTotalPrice(): number  {
    this.shoppingCart.totalPrice = 0;
    if (!this.isShoppingCart()) return this.shoppingCart.totalPrice;


    Object.keys(this.shoppingCart.items).forEach((key: string) => {
      this.shoppingCart.totalPrice += this.itemService.getItemPrice(key) * this.shoppingCart.items[key];
    })

    return parseFloat(this.shoppingCart.totalPrice.toFixed(2));
  }

  getItemsKeys(): string[] {
    return Object.keys(this.shoppingCart.items);
  } 
}