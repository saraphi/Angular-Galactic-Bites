import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() shoppingCart!: ShoppingCart;
  @Input() item!: Product | Menu;

  getQuantity(): number {
    return this.shoppingCart.getQuantity(this.item.id)!;
  }

  delete() {
    this.shoppingCart.deleteItem(this.item.id);
  }

  add() {
    this.shoppingCart.addItem(this.item.id);
  }

  remove() {
    this.shoppingCart.removeItem(this.item.id);
  }
}