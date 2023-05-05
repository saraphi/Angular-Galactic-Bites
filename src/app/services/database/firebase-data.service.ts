import { Injectable } from '@angular/core';
import { getFirestore, getDoc, doc, collection, query, getDocs, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
import { Category } from 'src/app/models/category';

import { Product } from 'src/app/models/product';
interface ProductO {
    
    image: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    category: string;
}
@Injectable({
  providedIn: 'root'
})


export class FirebaseDataService {
  //Images
  private cache: { [url: string]: Observable<string> } = {};
  
  
  constructor(private storage: Storage) {

  }
  
  //Product Services
  async getAllProducts(): Promise<Product[]>{
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    const snapshot = await getDocs(q);
    const productList = [];
    

    snapshot.docs.forEach((doc) => {
      const data = doc.data() as ProductO;
      const product: Product = {
        id: doc.id,
        name: data.name,
        description: data.description,
        image: data.image,
        price: data.price,
        discount: data.discount,
        category: data.category
        //mirar si hacemos el descuento aqui
        //puntos 

      };
      productList.push(product)
    });
    return productList;
  }
  
  //Por si metemos mas
  async addProducts(products: ProductO[]) {
    console.log("llegue");
    const db = getFirestore();
    const productsCollection = collection(db, 'Productos');
    for (const product of products) {
      await addDoc(productsCollection, product);
    }
  }

  //Imagenes Mejorado
  getImage(url: string): Observable<string> {
      if (!this.cache[url]) {
        this.cache[url] = new Observable<string>((observer) => {
          getDownloadURL(ref(this.storage, url)).then((downloadUrl) => {
            observer.next(downloadUrl);
            observer.complete();
          }).catch((error) => {
            observer.error(error);
          });
        });
      }
      return this.cache[url];
    }
}