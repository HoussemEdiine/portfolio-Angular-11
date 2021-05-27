import { Injectable } from '@angular/core';
import firebase  from 'firebase/app';
import 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from './User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User | null>;

  constructor(private fireAuth: AngularFireAuth) {
  this.user = fireAuth.authState;
  }
async  loginWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => console.log('successfully logged in '))
      .catch(err => console.log('error while sing in ', err));

  }

}
