import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  // @Input() item!: Product | Menu;

  item: Product | Menu = new Product('0', "../../../assets/placeholder.png", "Hamburguesa","Hambursa rica", 6.30, 0);

  quantity: number = 1;

  delete() {}

  add() {
    this.quantity++;
  }

  remove() {
    this.quantity--;
  }
}