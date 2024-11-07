import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;

  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log(`User is logged in as ${user.email}`);
      } else {
        this.uid = undefined;
        console.log('User is logged out');
      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUid() {
    return this.uid;
  }

  registerUser(email: string, password: string) {
    // Register a new user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong while signup. Please try again.');
      });
  }

  loginUser(email: string, password: string) {
    // Log in an existing user
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong while login. Please try again.');
      });
  }

  logout() {
    // Log out the current user
    const auth = getAuth();
    auth.signOut().catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Something went wrong. Please try again.');
    });
  }
}
