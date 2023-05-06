import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // NOT FINAL
  products: {[key: string]: Product} = {
    '0': { id: '0', image: '../../../assets/placeholder.png', name: 'Pizza', description: 'Pizza rica', price: 10.8, discount: 25, category: Category.main },
    '1': { id: '1', image: '../../../assets/placeholder.png', name: 'Borguesa', description: 'Borguesa wena', price: 6.2, discount: 0, category: Category.main },
    '2': { id: '2', image: '../../../assets/placeholder.png', name: 'Taquito', description: 'Taquito sabroso', price: 2.5, discount: 0, category: Category.main },
    '3': { id: '3', image: '../../../assets/placeholder.png', name: 'AAA', description: 'AAA sabroso', price: 2.5, discount: 40, category: Category.main },
    '4': { id: '4', image: '../../../assets/placeholder.png', name: 'Taquito MM', description: 'Taquito mmmm', price: 2.5, discount: 10, category: Category.main },
    '5': { id: '5', image: '../../../assets/placeholder.png', name: 'Taquito MM', description: 'Taquito mmmm', price: 2.5, discount: 10, category: Category.main },
    '6': { id: '6', image: '../../../assets/placeholder.png', name: 'Taquito MM', description: 'Taquito mmmm', price: 2.5, discount: 10, category: Category.main },
    '7': { id: '7', image: '../../../assets/placeholder.png', name: 'Taquito MM', description: 'Taquito mmmm', price: 2.5, discount: 10, category: Category.main },
  }

  getProductsOnDiscount(): string[] {
    let discounted: string[] = [];
    this.getProductsId().forEach((key: string) => {
      if (this.isOnDiscount(key)) discounted.push(key);
    })
    return discounted;
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
    return parseFloat((this.products[itemId].price - (this.products[itemId].price - this.getItemDiscount(itemId))/100).toFixed(2));
  }

  getItemDiscount(itemId: string): number {
    return this.products[itemId].discount;
  }

  getItem(itemId: string): Product | null {
    return this.products[itemId];
  } 
}