import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Observable, from } from 'rxjs';
// import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';
import { Router } from '@angular/router';
// import { ProductService } from 'src/app/services/products/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: string = 'Client';
  imageUrl: Observable<string>;
  product: Product;

  constructor(private router: Router) { }
  @Input() productoid: string;
  details() {
    this.router.navigate(['/product-detail', this.product.name], { state: { producto: this.product } });
  }

 async ngOnInit() {

   this.setup();
  }
  async setup() {
  // await this.productServices.getProductById(this.productoid).then((product) => {
  //    this.product = product
  //   });
  //  this.imageUrl = from( this.firebaseDataService.getImage(this.product.image));
  }
}