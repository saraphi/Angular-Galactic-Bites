import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { getFirestore, getDoc, doc, collection, query, getDocs, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

import { Product } from 'src/app/models/product.model';
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
  constructor(private storage: Storage) {
   }

  async getImage(url:string){
    console.log();
      return getDownloadURL(ref(this.storage, url));
  }
  async getProductById(id: string): Promise<Product> {
    const db = getFirestore();
    const productRef = doc(db, 'Productos', id);
    const productDoc = await getDoc(productRef);
    if (!productDoc.exists()) {
      throw new Error(`No existe el producto con ID ${id}`);
    }
    const productData = productDoc.data();
    const product = productData as Product;
    return product;
  }
  async getProductsByCategory(): Promise<Map<string, Product[]>> {
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    const snapshot = await getDocs(q);
    const productosPorCategoria = new Map<string, Product[]>();
    snapshot.docs.forEach((doc) => {
      const product = doc.data() as Product;
      const categoria = product.category;
      if (productosPorCategoria.has(categoria)) {
        productosPorCategoria.get(categoria)?.push(product);
      } else {
        productosPorCategoria.set(categoria, [product]);
      }
    });
    return productosPorCategoria;
  }
  async addProducts(products: ProductO[]) {
    console.log("llegue");
    const db = getFirestore();
    const productsCollection = collection(db, 'Productos');
    for (const product of products) {
      await addDoc(productsCollection, product);
    }
  }
//Ignora esta parte es hacer pruebas
logProducts() {
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    getDocs(q).then((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
  }
  
  //Carge unicamente los datos de la base datos y devuelve un objetos que castea los atributos
  async getProduct(): Promise<Product> {
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    const snapshot = await getDocs(q);
    const product = snapshot.docs[0].data() as Product;
    return product;
  }

  //Adaptar 
  getImages() {
    const imagesRef = ref(this.storage, 'images');
    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        var images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          images.push(url);
          console.log(url);
        }
      })
      .catch(error => console.log(error));
  }
 
  
}
