import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() item: Product | null = null;

  constructor(private shoppingCartService: ShoppingCartService) {}

  getPrice(item: Product): number | null {
    if (!this.item) return null;
    return this.item.price - (this.item.price*this.item.discount);
  }

  getQuantity(): number | null {
    if (!this.item) return null;
    return this.shoppingCartService.getQuantity(this.item.id)!;
  }

  delete() {
    if (!this.item) return;
    this.shoppingCartService.deleteItem(this.item.id);
  }

  add() {
    if (!this.item) return;
    this.shoppingCartService.addItem(this.item.id);
  }

  remove() {
    if (!this.item) return;
    this.shoppingCartService.removeItem(this.item.id);
  }
}