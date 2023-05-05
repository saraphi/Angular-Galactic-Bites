import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductComponent } from '../product/product.component';
import { ProductService } from 'src/app/services/product/product.service';
// import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }
}