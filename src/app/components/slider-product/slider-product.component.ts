import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent {

  products: ProductComponent[]

  constructor() {
    this.products = [new ProductComponent(), new ProductComponent(), new ProductComponent()];
  }
}