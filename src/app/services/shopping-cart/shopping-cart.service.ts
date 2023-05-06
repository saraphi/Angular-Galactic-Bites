import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';
import { FirebaseDataService } from '../database/firebase-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: Map<string, number> = new Map<string, number>();
  totalPrice: number = 0;
  
  constructor(private itemService: ProductService, private firebaseServices: FirebaseDataService) {}

  isShoppingCart(): boolean {
    return (this.shoppingCart && this.shoppingCart.size > 0) 
  }

  getQuantity(itemId: string): number | null {
    return this.shoppingCart.get(itemId);
  }

  deleteItem(itemId: string): void {
    this.shoppingCart.delete(itemId);
  }

  addItem(itemId: string): void {
    let quantity: number = 0;
    if (this.shoppingCart.has(itemId)) quantity = this.shoppingCart.get(itemId);
    this.shoppingCart.set(itemId, quantity + 1);
  }

  removeItem(itemId: string): void {
    let quantity: number = 0;
    if (this.shoppingCart.has(itemId)) quantity = this.shoppingCart.get(itemId);
    this.shoppingCart.set(itemId, quantity - 1);
    if (quantity - 1 == 0) this.deleteItem(itemId);
  }

  getTotalPrice(): number  {
    this.totalPrice = 0;
    if (!this.isShoppingCart()) return this.totalPrice;


    this.shoppingCart.forEach((value: number, key: string) => {
      this.totalPrice += this.itemService.getItemPrice(key) * value;
    })

    return parseFloat(this.totalPrice.toFixed(2));
  }

  getItemsKeys(): string[] {
    return Array.from(this.shoppingCart.keys());
  }
  
  setData(map: Map<string, number>): void {
    console.log('setting up shopping cart data...');
    if (!map) return;
    this.shoppingCart = map;
  }
}