import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SliderProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
