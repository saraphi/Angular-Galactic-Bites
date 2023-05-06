import { Injectable } from '@angular/core';
import { getFirestore, getDoc, doc, collection, query, getDocs, addDoc, setDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';

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
  
  constructor(private storage: Storage) {}
  
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

  async setUserData(userData: User) {
    const userDoc = doc(this.db, 'Users', userData.id);

    await setDoc(userDoc, { 
      id: userData.id,
      name: userData.name,
      email: userData.email,
      points: userData.points,
      phone: userData.phone, 
      shoppingCart: userData.shoppingCart
    })
  }
  
  async updateShopping(uid: string, products: Map<string, number>) {
    const userDoc = doc(this.db, 'Users', uid);
    await setDoc(userDoc, { 
      shoppingCart: products
    })
  } 

    
  // async getShopping(uid: string):Promise<Map<string, number>| null > {
  //     // console.log(uid)
  //     // const userDoc = doc(this.db, 'Users', uid);
  //   // return await getDoc(userDoc).then((doc) =>
  //   // {
  //   //   console.log(doc.data())
  //   //   if (doc.exists()) {
  //   //     const userData = doc.data() as UserData;
  //   //     console.log(userData)
  //   //     return userData.shoppingCart;
  //   //   } else {
  //   //     console.log("Paso por aqui")
  //   //     return new Map<string,number>()
  //   //   }
  //   //   }
  //   // ).catch((error) => {
  //   //   console.error(error)
  //   //   return new Map<string,number>()
  //   // })


  //   // try {
  //   //   const userDoc = doc(this.db, 'Users', uid);
  //   //   return getDoc(userDoc).then((doc) => {
  //   //     console.log(doc.data())
  //   //     if (doc.exists()) {
  //   //       const userData = doc.data() as UserData;
  //   //       console.log(userData)
  //   //       return userData.shoppingCart;
  //   //     } else {
  //   //       console.log("Paso por aqui")
  //   //       return new Map<string, number>()
  //   //     }
  //   //   })
  //   // } catch (error) {
  //   //   console.error("Error getInShoppingCart", error)
  //   //   return null
  //   // }

  //   }
    
  
  
  async getUserData(uid: string): Promise<User | null> {
    const userDoc = doc(this.db, 'Users', uid);
    const userDocSnap = await getDoc(userDoc);
    if (userDocSnap.exists()) {
      const user = userDocSnap.data() as User;
      return user;
    }
    return null;
  }
}