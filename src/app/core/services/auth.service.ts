import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private readonly uid: string = 'lXl9pOgOgSQxLvQNjvfdy2Xy0O22'
  
  constructor(
    private auth: Auth,
    ) {}

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signup(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    return signOut(this.auth);
  }

  whoIs() {
    const user = this.auth.currentUser;
    return user
  }

  verification() {
    const user = this.auth.currentUser;
    if ( user && user.uid === this.uid ) {
      return true;
    } else {
      return false;
    }
  }
}