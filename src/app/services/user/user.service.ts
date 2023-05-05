import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { FirebaseAuthService } from '../database/firebase-auth.service';
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
      password: 'Hola!9', 
      phone: '123 456 789',
      points: 0
    },
    'pipo@gmail.com': {
      id: "1", 
      name: 'Pipo', 
      email: 'pipo@gmail.com', 
      password: 'Hola!8', 
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

  login(email: string, password: string): boolean {
    if (this.emailExists(email) && this.checkPassword(email, password)) {
      this.user = this.usersEmail[email];
      return true;
    } 
    return false;
  }

  signup(name: string, email: string, password: string, phone: string): boolean {
    if (Object.keys(this.usersEmail).includes(email)) return false;
    this.nextId += 1;

    let user: User = {
      id: this.nextId.toString(),
      name: name,
      email: email,
      password: password,
      phone: phone,
      points: 0
    };

    this.usersEmail[email] = user;
    this.user = user;
    return true;
  }

  emailExists(email: string): boolean {
    return this.usersEmail[email] != null;
  }

  checkPassword(email: string, password: string): boolean {
    return this.usersEmail[email].password == password;
  }
}
