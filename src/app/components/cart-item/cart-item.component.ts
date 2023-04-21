import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  // @Input() product!: Product;

  product: Product = {
    id: "0",
    image: "../../../assets/placeholder.png",
    name: "Hamburguesa",
    description: "Hambursa rica",
    price: 6.30,
    discount: 0
  }

  quantity: number = 1;

  delete() {}

  add() {
    this.quantity++;
  }

  remove() {
    this.quantity--;
  }
}