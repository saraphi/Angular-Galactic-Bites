import { Injectable } from '@angular/core';
import { getFirestore, getDoc, doc, collection, query, getDocs, addDoc, setDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user';
interface UserData {
  name: string;
  email: string;
  points: number;
  phone: string;
}

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
  private db = getFirestore();
  
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

    //Arreglar esto
    async setUserData(uid: string, userData: UserData) {
      console.log("llegue");
      console.log(uid);
      console.log(userData);
      console.log(userData.name);
      console.log(userData.email);
      console.log(userData.points);
      console.log(userData.phone);
      const userDoc = doc(this.db, 'Users', uid);
      await setDoc(userDoc, { 
        name: userData.name,
        email: userData.email,
        points: userData.points,
        phone: userData.phone 
      })
    }
  
    async getUserData(uid: string): Promise<User | null> {
      const userDoc = doc(this.db, 'Users', uid);
      const userDocSnap = await getDoc(userDoc);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data() as UserData;
        const user: User = {
          id: userDocSnap.id,
          ...userData,
        };
        return user;
      }
      return null;
    }
}