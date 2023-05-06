import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { FirebaseAuthService } from '../database/firebase-auth.service';
import { __await } from 'tslib';
import { waitForAsync } from '@angular/core/testing';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firebaseAuthService: FirebaseAuthService) {}

  user: User | null = null;

   async isLogged(): Promise<boolean> {
     return true//return await this.firebaseAuthService.isLoggedIn();
   } 

  async logout(): Promise<void> {
    return await this.firebaseAuthService.logout().then(() => {
      this.user = null;
    })
  }
   

   async login(email: string, password: string, ): Promise<boolean>  {
    return this.firebaseAuthService.login({ email, password })
      .then(user => {
        this.user = user;
        return true;
      })
      .catch(e => {
        console.error('error logging in user', e)
        return false;
      });
  }

  async signup(name: string, email: string, password: string, phone: string): Promise<boolean> {  

    return this.firebaseAuthService.signUp({ email, password, name, phone })
      .then((user) => {
        this.user = user;
        console.log(user);
        if (this.user != null) return true;
        return false;
      })
      .catch((e) => {
        console.error('error signing up user', e)
        return false;
    });
  }
  

  async emailExists(email: string): Promise<boolean> {
    return this.firebaseAuthService.checkIfEmailExists(email)
      .then((booleano) => {
        return booleano;
      })
      .catch((e) => {
        console.error('error checking email', e)
        return false;
      });
  }

  checkPassword(email: string, password: string): boolean {
    return true;
  }

  
}
