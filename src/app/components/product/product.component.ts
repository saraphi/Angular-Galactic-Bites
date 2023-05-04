import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product: Product = { id: '1', image: '../../../assets/placeholder.png', name: 'Borguesa', description: 'Borguesa wena', price: 6.2, discount: 0 }
}