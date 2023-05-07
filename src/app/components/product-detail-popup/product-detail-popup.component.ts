import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product-detail-popup',
  templateUrl: './product-detail-popup.component.html',
  styleUrls: ['./product-detail-popup.component.scss']
})
export class ProductDetailPopupComponent implements OnInit {

  @Input() product: Product | null = null;
  @Input() showPoints: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  url: string = '../../../assets/placeholder.png';
  discount: number = 0;
  price: number = 0;
  points: number = 0;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private userService: UserService, private productService: ProductService) {}

  ngOnInit(): void {
    if (!this.product) return;
    this.setUrl();
    if (this.showPoints) this.getPoints();
    else this.getRealPrice();
  }

  onClose(): void {
    this.close.emit();
  }

  private setUrl() {
    this.productService.getURL(this.product.id).subscribe({
      next: (url: string) => this.url = url,
      error: (error: any) => console.error('error getting url:', error)
    });
  }

  private getRealPrice() {
    this.price = this.productService.getItemPrice(this.product.id);
  }

  private getPoints() {
    this.points = 50;
  }

  showDiscount(): boolean {
    // return this.productService.isOnDiscount(this.product.id);
    return false;
  }

  add(): void {
    if (!this.product) return;
    if (!this.userService.isLogged()) this.router.navigate['/login'];
    this.shoppingCartService.addItem(this.product.id);
    this.onClose();
  }
}