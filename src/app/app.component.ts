import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from './services/database/firebase-data.service';

import { Observable } from 'rxjs';
import { ProductService } from './services/product/product.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private firebaseDataService: FirebaseDataService, private productservices: ProductService) {
  }

  ngOnInit(): void {
    this.setUp();
  }
  setUp() {
    this.productservices.setUp();
  }
}

