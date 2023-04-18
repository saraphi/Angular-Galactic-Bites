import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OffersComponent } from './pages/offers/offers.component';
import { FooterComponent} from "./components/footer/footer.component";
import { LoginComponent } from './pages/login/login.component';
import { SpaceBackgroundComponent } from './components/space-background/space-background.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentFormComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'stars', component: SpaceBackgroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
