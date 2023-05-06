import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  discounted: string[] = [];
  points: string[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.discounted = this.productService.getProductsOnDiscount();
  }
}