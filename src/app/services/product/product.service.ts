import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // NOT FINAL
  products: {[key: string]: Product} = {
    '0': { id: '0', image: '../../../assets/placeholder.png', name: 'Pizza', description: 'Pizza rica', price: 10.8, discount: 0, category: Category.main },
    '1': { id: '1', image: '../../../assets/placeholder.png', name: 'Borguesa', description: 'Borguesa wena', price: 6.2, discount: 0, category: Category.main },
    '2': { id: '2', image: '../../../assets/placeholder.png', name: 'Taquito', description: 'Taquito sabroso', price: 2.5, discount: 0, category: Category.main }
  }

  getProducts(): Product[] {
    return Object.values(this.products);
  }

  getProductsId(): string[] {
    return Object.keys(this.products);
  }

  isOnDiscount(itemId: string): boolean {
    return this.products[itemId].discount > 0;
  }

  getItemPrice(itemId: string): number {
    return this.products[itemId].price - (this.products[itemId].price*this.products[itemId].discount);
  }

  getItem(itemId: string): Product | null {
    return this.products[itemId];
  } 
}