
import { Injectable } from '@angular/core';
import {
  
} from 'firebase/auth';
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseDataService } from './firebase-data.service';
import { User } from 'src/app/models/user';
import * as firebase from 'firebase/compat';

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
  async saveUser(user: User):Promise<void> {
    console.log("Pi")
    return await this.firestoreService.updateUser(user).then(() => { return; })
  }
  //
  async updateEmail(newEmail: string):Promise<boolean> {
    return await this.afAuth.currentUser.then((user) => {
       
       return user.updateEmail(newEmail).then(() => {
         console.log("Correo electrónico actualizado exitosamente");
          return true;
      }).catch((error) => {
        console.error("Error al actualizar el correo electrónico:", error)
           return false;
      });
      })
}


async reauthenticateUser(providedPassword: string) {
  const user = await this.afAuth.currentUser;
  const email = user.email;
  
  const credential = EmailAuthProvider.credential(email, providedPassword);

  user.reauthenticateWithCredential(credential).then(() => {
    console.log("Usuario re-autenticado exitosamente");

    // Actualizar correo electrónico y/o contraseña aquí
    // Ejemplo: user.updateEmail("nuevo.email@example.com");
    // Ejemplo: user.updatePassword("nuevaContraseña");

  }).catch((error) => {
    console.error("Error al re-autenticar el usuario:", error);
  });
}


}



