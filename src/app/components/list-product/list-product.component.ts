import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {

  products = [1, 2, 3]
}
