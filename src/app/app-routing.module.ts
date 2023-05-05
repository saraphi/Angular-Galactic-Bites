import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OffersComponent } from './pages/offers/offers.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { Product } from './models/product.model';
import { ProductComponent } from './components/product/product.component';
import { ListCategoryProductsComponent } from './components/list-category-products/list-category-products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent },
 // { path: 'cart-item', component: CartItemComponent }, 
  { path: 'product-view', component: ProductComponent },
  { path: 'product-detail/:name', component: ProductDetailComponent },
  {path:'list-product', component: ListCategoryProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
