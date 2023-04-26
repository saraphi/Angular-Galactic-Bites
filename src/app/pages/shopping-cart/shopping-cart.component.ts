import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { Product } from 'src/app/models/product';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  // @Input() shoppingCart!: ShoppingCart;
  shoppingCart: ShoppingCart;

  // ESTO NO ESTARÁ EN LA VERSIÓN FINAL
  products: Product[];
  items: Map<string, number> = new Map();

  constructor() {
    // ESTO NO ESTARÁ EN LA VERSIÓN FINAL
    this.products = [
      new Product('0', '../../../assets/placeholder.png', 'Pizza', 'Pizza rica', 10.8, 0),
      new Product('1', '../../../assets/placeholder.png', 'Borguesa', 'Borguesa rica', 6.2, 0),
      new Product('2', '../../../assets/placeholder.png', 'Taquito', 'Taquito weno', 2.5, 0)
    ];
    this.items.set('0', 1);
    this.items.set('1', 1);
    this.shoppingCart = new ShoppingCart(this.items);
  }

  getItemsKeys() {
    return Array.from(this.shoppingCart.items.keys());
  }

  getItem(itemId: string): Product | Menu {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == itemId) return this.products[i];
    }
    return this.products[2];
  } 
}