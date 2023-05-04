import { Injectable, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit {

  shoppingCart: ShoppingCart | null = null;

  constructor(private userService: UserService, private itemService: ProductService) {}

  ngOnInit(): void {
    if (this.userService.user) this.shoppingCart = this.getMyShoppingCart();
  }

  private getMyShoppingCart(): ShoppingCart | null {
    return { items: {'0': 1, '1': 2}, totalPrice: 0 };
  }

  getQuantity(itemId: string): number | null {
    if (!this.shoppingCart) return null;
    return this.shoppingCart.items[itemId];
  }

  deleteItem(itemId: string): void {
    if (!this.shoppingCart) return;
    delete this.shoppingCart.items[itemId];
  }

  addItem(itemId: string): void {
    if (!this.shoppingCart) return;
    let quantity: number = 0;
    if (this.shoppingCart.items[itemId]) quantity = this.shoppingCart.items[itemId];
    this.shoppingCart.items[itemId] = quantity + 1;
  }

  removeItem(itemId: string): void {
    if (!this.shoppingCart) return;
    let quantity: number = 0;
    if (this.shoppingCart.items[itemId]) quantity = this.shoppingCart.items[itemId];
    this.shoppingCart.items[itemId] = quantity - 1;
    if (quantity - 1 == 0) this.deleteItem(itemId);
  }

  getTotalPrice(): number  {
    if (!this.shoppingCart) return 0;

    this.shoppingCart.totalPrice = 0;

    Object.keys(this.shoppingCart.items).forEach((key: string) => {
      if (this.shoppingCart)
      this.shoppingCart.totalPrice += this.itemService.getItemPrice(key) * this.shoppingCart.items[key];
    })

    return parseFloat(this.shoppingCart.totalPrice.toFixed(2));
  }

  getItemsKeys(): string[] {
    if (!this.shoppingCart) return [];
    return Object.keys(this.shoppingCart.items);
  } 
}