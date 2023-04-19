import { Injectable } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore';
import { collection, query, getDocs } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  
  constructor(private storage: Storage) {
    const db = getFirestore()

   }
  logProducts() {
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    getDocs(q).then((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
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
