import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FirebaseDataService } from '../database/firebase-data.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mapProducts: Map<string, Product>  //ids: Productos
  private mapCategory: Map<string, string[]>
  myMap = new Map<number, string>();  //categorias: idsProductos//categorias: idsProductos

  constructor(private firebaseservice: FirebaseDataService) { 
    this.mapProducts = new Map<string, Product>();
    this.mapCategory = new Map<string, string[]>();
    //this.setUp();
  }
  async setUp() {
    await this.firebaseservice.getAllProducts()
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
  
  // ver si queremos ponerlo en el componente
  async getProductsIdByCategory() {
   
        
      return this.mapCategory;
      
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return new Promise(async (resolve, reject) => {
      if (this.mapProducts.size > 0) {
        const product = this.mapProducts.get(id);
        console.log(this.mapProducts.get(id))
        resolve(product);
      } else {
        //await this.setUp();
        console.log(this.mapProducts)
        const product = this.mapProducts.get(id);
        resolve(product);
      }
    });
  }
}