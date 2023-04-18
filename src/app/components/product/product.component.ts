import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = {
    id: "0",
    image: "../../../assets/placeholder.png",
    name: "Hamburguesa",
    description: "Hambursa rica",
    price: 6.30,
    discount: 0
  }

  constructor() {}
}