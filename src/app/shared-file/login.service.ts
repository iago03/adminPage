import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth,) { }

  loginFireBase(email:string, password:string){
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
}
