import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService 
{
  constructor(private auth: Auth,private firestore : AngularFirestore,private authAngular:AngularFireAuth) 
  {

  }

  login({email,password}:any)
  {
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  logout()
  {
    return signOut(this.auth);
  }

  guardarRepartidor(repartidor: any): Promise<void> 
  {
    const id = this.firestore.createId();
    return this.firestore.collection('repartidores').doc(id).set(repartidor);
  }

  getUserEstado(): Observable<any> 
  {
    return this.authAngular.authState;
  }

}
