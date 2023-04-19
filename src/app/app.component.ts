import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './database/firebase-data.service';
import { FirebaseStorage } from '@angular/fire/storage';
import { Firestore, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



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
    //this.getImages();
    //this.firebaseDataService.logProducts();
  }

}
