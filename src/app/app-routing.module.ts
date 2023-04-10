import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { BannerComponent} from "./components/banner/banner.component";

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'banner', component: BannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
