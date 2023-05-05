import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductComponent } from '../product/product.component';
import { ProductService } from 'src/app/services/product/product.service';
import { Category } from 'src/app/models/category';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slider-product',
  templateUrl: './slider-product.component.html',
  styleUrls: ['./slider-product.component.scss']
})
export class SliderProductComponent implements OnInit {

  categories: string[] = [];
  carouselItems: string[] = [];
  position: number = 0;

  constructor() {
    this.categories = [Category.menu, Category.pizza, Category.burguer, Category.taco, Category.main, Category.complement, Category.drink];
    this.carouselItems = this.categories.slice(0, 3);
  }

  ngOnInit(): void {
    this.updateCarouselItems();
  }

  updateCarouselItems() {
    this.carouselItems = this.categories.slice(this.position, this.position+3);
  }

  moveLeft(): void {
    if (this.position == 0) return;
    this.position -= 1; 
    this.updateCarouselItems();
  }

  moveRight(): void {
    if (this.position == this.categories.length - 3) return;
    this.position += 1;
    this.updateCarouselItems();
  }
}