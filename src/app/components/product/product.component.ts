import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Observable, from } from 'rxjs';
import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: string = 'Client';
  imageUrl!: Observable<string>;
  product: Product;

  constructor(public firebaseDataService: FirebaseDataService, private router: Router) { }
  
  details() {
    this.router.navigate(['/product-detail', this.product.name], { state: { producto: this.product } });
  }

  ngOnInit() {
    this.firebaseDataService.getProduct().then((product) => {
      this.product = product;
      this.imageUrl = from(this.firebaseDataService.getImage(product.image));
    });

  }
}