import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { getFirestore, getDoc, doc, collection, query, getDocs } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Product } from 'src/app/models/product';

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
