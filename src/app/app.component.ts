import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './services/database/firebase-data.service';

import { Observable } from 'rxjs';
import { ProductService } from './services/products/product.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private firebaseDataService: FirebaseDataService, productservices: ProductService) {
    productservices.setUp();

  }


}

