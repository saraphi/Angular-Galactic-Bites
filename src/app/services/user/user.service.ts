import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { FirebaseAuthService } from '../database/firebase-auth.service';
import { __await } from 'tslib';
import { waitForAsync } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firebaseAuthService: FirebaseAuthService) {}
  usersEmail: {[key: string]: User} = {
    'saragonza.lez0608@gmail.com': {
      id: "0", 
      name: 'Sara', 
      email: 'saragonza.lez0608@gmail.com', 
      phone: '123 456 789',
      points: 0
    },
    'pipo@gmail.com': {
      id: "1", 
      name: 'Pipo', 
      email: 'pipo@gmail.com', 
      phone: '123 456 789',
      points: 0
    }
  };

  nextId: number = 1;
  user: User | null = null;

  async isLogged(): Promise<boolean> {
    return await this.firebaseAuthService.isLoggedIn();
  }

  async logout(): Promise<void> {
    this.user = null;
    await this.firebaseAuthService.logout();
  }

  login(email: string, password: string, callback: (success: boolean) => void): void {
    this.firebaseAuthService.login({ email, password })
      .then(user => {
        this.user = user;
        callback(true);
      })
      .catch(e => {
        callback(false);
      });
  }

  signup(name: string, email: string, password: string, phone: string): boolean {
    if (Object.keys(this.usersEmail).includes(email)) return false;
    this.nextId += 1;

   
    
    this.firebaseAuthService.signUp({ email, password, name, phone })
      .then(user => {
        this.user = user;

          return true;})
      .catch(e => { 
        return false;
      })
  }

  emailExists(email: string, callback: (exists: boolean) => void): void {
    this.firebaseAuthService.checkIfEmailExists(email)
      .then((booleano) => {
        callback(booleano);
      })
      .catch((e) => {
        callback(false);
      });
  }

  checkPassword(email: string, password: string): boolean {
    return true;
  }
}
