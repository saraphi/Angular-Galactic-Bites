import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getFirestore } from '@angular/fire/firestore';
import { collection, query, getDocs } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  
  constructor() { }
  logProducts() {
    const db = getFirestore();
    const q = query(collection(db, 'Productos'));
    getDocs(q).then((snapshot) => {
      console.log(snapshot.docs.map(doc => doc.data()));
    });
  }
}
