import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductComponent } from '../product/product.component';
// import { FirebaseDataService } from 'src/app/services/database/firebase-data.service';
@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent {

  products: ProductComponent[]

  constructor() {
    this.products = [];
  }
}