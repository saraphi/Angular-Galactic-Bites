import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseDataService } from './firebase-data.service';

interface UserData {
  name: string;
  email: string;
  points: number;
  phone: string;
}

interface User extends UserData {
  id: string;
}

@Injectable({
  providedIn: 'root'
})


export class FirebaseAuthService {
  
  constructor(private auth: Auth, private afAuth: AngularFireAuth, private firestoreService: FirebaseDataService) {}

  async register({ email, password, userData }: { email: string; password: string; userData: UserData }) {
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password);
      const uid = credential.user.uid;
      await this.firestoreService.setUserData(uid, userData);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    return this.auth.currentUser !== null;
  }

  async login({ email, password }: { email: string; password: string }): Promise<User | null> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return this.firestoreService.getUserData(this.auth.currentUser.uid);
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  }

  async checkIfEmailExists(email: string): Promise<boolean> {
    try {
      const signInMethods = await this.afAuth.fetchSignInMethodsForEmail(email);
      return signInMethods.length > 0;
    } catch (error) {
      console.error('Error checking if email exists:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('User logged out.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }
}