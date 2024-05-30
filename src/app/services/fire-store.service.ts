import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {
  constructor(private firestore: AngularFirestore) { } // Inicializa AngularFireStorage en el constructor

  obtenerRepartidores(): Observable<any[]> 
  {
    return this.firestore.collection('repartidores', ref => ref.orderBy('edad')).valueChanges()
  }

  obtenerActores(): Observable<any[]> 
  {
    return this.firestore.collection('actores', ref => ref.orderBy('edad')).valueChanges();
  }

  obtenerPaises(): Observable<any[]> {
    return this.firestore.collection('paises', ref => ref.limit(10)).valueChanges();
  }

  guardarRepartidor(repartidor: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('repartidores').doc(id).set(repartidor);
  }

  guardarPelicula(pelicula: any): Promise<any> 
  {
    return this.firestore.collection('peliculas').add(pelicula);
  }



}
