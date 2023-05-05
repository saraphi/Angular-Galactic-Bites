import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Observable, from } from 'rxjs';
// import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  imageUrl!: Observable<string>;
  product: Product;
  constructor(private route: ActivatedRoute) {} 
  ngOnInit() {
    this.product = history.state.producto;
    console.log(this.product);
    // this.imageUrl = from( this.firebaseDataService.getImage(this.product.image));

  }
}
