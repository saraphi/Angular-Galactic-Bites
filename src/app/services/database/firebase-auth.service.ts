//Tengo que volver hacerlo cuando pueda comprobarlo y cambiar weas
/*
//Tiene que contener lo siguiente:
logearse 
iniciar sesion 
editar datos del usuario 
borrar datos 
comprobar si esta iniciado
mantener la sesion



Codigo relevante para cuando este montado:
async register() {
    try {
        const result = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
        const userUid = result.user.uid;
        // Llame a la función que crea el documento con la UID del usuario
        await this.createUserData(userUid);
    } catch (error) {
        console.log(error);
    }
}
async createUserData(uid: string) {
    return await this.firestore.collection('users').doc(uid).set({
        username: this.username,
        email: this.email
    });
}
*/
import { getFirestore, doc, setDoc } from '@angular/fire/firestore';
import { Injectable, NgZone } from '@angular/core';
//import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FirebaseDataService } from './firebase-data.service';
import { getDoc } from 'firebase/firestore';
interface user {
    
 email: string;
    
}

@Injectable({
  providedIn: 'root',
})


//Esto es basico que te cagas
export class AuthService {
  userData

  constructor(private auth: Auth,private firebaseServices: FirebaseDataService) { }
  
  async register({ email, password, userData }: any) {

    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    const uid =  credential.user.uid;
    const db = getFirestore();
    //Idea 
    
    const userDoc = doc(db, 'Users', uid);
    await setDoc(userDoc, { userData})

  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
    
  }

  logout() {
    return signOut(this.auth);
  }

  async getCurrentUser(): Promise<user | null> {
    const user = this.auth.currentUser;
    if (user) {
      const uid = user.uid;
      const db = getFirestore();
      const userDoc = doc(db, 'users', uid);

      const userDocSnap = await getDoc(userDoc);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        return {
          email: user.email,
          
        };
      }
    }
    return null;
  }

}