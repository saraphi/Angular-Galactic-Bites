import { Injectable } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';
import { of } from 'rxjs';
import { FirebaseDataService } from '../database/firebase-data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCart = { items: {'2d9jYtJjN3EcmUkHtPwI': 1, 'PvnOAtwxdt0d6EHrVfN8': 2}, totalPrice: 0 };
  isShop = true;
  constructor(private userService: UserService, private itemService: ProductService, private firebaseServices: FirebaseDataService) {}

  async isShoppingCart(): Promise<boolean> {
    return this.isShop;
  }
  async setUp():Promise<void> {
    console.log("AAAA")
    return await this.firebaseServices.getShopping(this.userService.user.id).then((value2) => {
      console.log(value2)
      if (value2.size > 0) {
        this.setData(value2)
        this.isShop= true
      } else {
        this.isShop= false
      }
      }
    )
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
  getData() {
    return new Map(Object.entries(this.shoppingCart.items));
  }
  setData(mapa: Map<string, number>) {
    this.shoppingCart.items = Object.fromEntries(mapa);
  }

}