import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { FirebaseDataService } from '../database/firebase-data.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mapProducts: Map<string, Product> = new Map<string, Product>(); //ids: Productos
  private mapCategory: Map<string, string[]> = new Map<string, string[]>();
  myMap = new Map<number, string>();  //categorias: idsProductos//categorias: idsProductos
  
  // NOT FINAL
  constructor(private firebaseDataServices:FirebaseDataService){}

  async setUp() {
    await this.firebaseDataServices.getAllProducts()
      .then((lista) => {
      lista.forEach((product) => {
        const categoria = product.category;
        if (this.mapCategory.has(categoria)) {
          this.mapCategory.get(categoria)?.push(product.id);
        } else {
          this.mapCategory.set(categoria, [product.id]);
        }
        this.mapProducts.set(product.id, product);
        })
      })

  }

  
  getProductsId(): string[] {
    let listProductId= Object.keys(this.mapProducts);
    return listProductId;
  }

  isOnDiscount(itemId: string): boolean {
    return this.getItem(itemId).discount > 0;
  }

  getItemPrice(itemId: string): number {
    let product: Product = this.getItem(itemId);
    return  product.price - (product.price * (product.discount/100))
  }

  getItem(id: string) {
    return this.mapProducts.get(id);
  }
}