import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseDataService } from './firebase-data.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  
  constructor(private auth: Auth, private afAuth: AngularFireAuth, private firestoreService: FirebaseDataService) {}

  async signUp({email, password, name, phone}: {email: string; password: string; name:string; phone:string;}): Promise<User | null>  {
    try {
      return createUserWithEmailAndPassword(this.auth, email, password).then(
        async (credential) => {
          const uid = credential.user.uid;
          const user: User = {
            id: uid,
            name: name,
            email: email,
            points: 0,
            phone: phone,
            shoppingCart:new Map<string, number>()
          };
          return this.firestoreService.setUserData(user).then(() => { return user});
      })
    } catch (error) {
      console.error('Error registering user:', error);
      return null;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    if (this.auth.currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }

  async login({email, password }: { email: string; password: string }): Promise<User | null> {
      return signInWithEmailAndPassword(this.auth, email, password).then(()=>{
        return this.firestoreService.getUserData(this.auth.currentUser.uid)
      })
  }

  async checkIfEmailExists(email: string): Promise<boolean> {
    try {
      return this.afAuth.fetchSignInMethodsForEmail(email).then((value)=> {return value.length > 0})

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