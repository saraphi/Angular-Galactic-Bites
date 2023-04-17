import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './database/firebase-data.service';
import { FirebaseStorage } from '@angular/fire/storage';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Client';
  
  images: string[];

  constructor(private storage: Storage) {
    this.images = [];
  }
  
  ngOnInit() {
    this.getImages();
    //this.firebaseDataService.logProducts();
  }
  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
          console.log(url);
        }
      })
      .catch(error => console.log(error));
  }
}
