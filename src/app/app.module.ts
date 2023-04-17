import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { EditProfilePopupComponent } from './components/edit-profile-popup/edit-profile-popup.component';
import { DeleteProfilePopupComponent } from './components/delete-profile-popup/delete-profile-popup.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderBannerComponent } from './components/slider-banner/slider-banner.component';
import { SliderProductComponent } from './components/slider-product/slider-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OffersComponent } from './pages/offers/offers.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { HomeComponent } from './pages/home/home.component';
import { PageSectionComponent } from './components/page-section/page-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    SignupFormComponent,
    PaymentFormComponent,
    EditProfilePopupComponent,
    DeleteProfilePopupComponent,
    BannerComponent,
    SliderBannerComponent,
    SliderProductComponent,
    ProfileComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    OffersComponent,
    PaymentComponent,
    HomeComponent,
    PageSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
