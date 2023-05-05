import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductComponent } from '../product/product.component';
import { ProductService } from 'src/app/services/product/product.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent implements OnInit {

  // products: Product[] = [];
  categories: string[] = [Category.menu, Category.pizza, Category.burguer, Category.taco, Category.main, Category.complement, Category.drink]

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      // this.products = this.productService.getProducts();
  }
}