import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = new Product('0', "../../../assets/placeholder.png", "Hamburguesa","Hambursa rica", 6.30, 0);
}