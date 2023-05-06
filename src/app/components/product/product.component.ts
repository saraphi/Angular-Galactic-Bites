import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productId: string = '';
  product: Product | null = null;
  discount: number | null = null;
  points: number | null = null;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.product = this.productService.getItem(this.productId);
    if (this.product && this.productService.isOnDiscount(this.productId)) this.discount = this.productService.getItemDiscount(this.productId);
  }

  details() {
    this.router.navigate(['']);
  }


//   title: string = 'Client';
//   imageUrl: Observable<string>;
//   product: Product;

//   constructor(private router: Router) { }
//   @Input() productoid: string;
//   details() {
//     this.router.navigate(['/product-detail', this.product.name], { state: { producto: this.product } });
//   }

//  async ngOnInit() {

//    this.setup();
//   }
//   async setup() {
//   // await this.productServices.getProductById(this.productoid).then((product) => {
//   //    this.product = product
//   //   });
//   //  this.imageUrl = from( this.firebaseDataService.getImage(this.product.image));
//   }
}