import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {
  constructor(private firestore: AngularFirestore) { } // Inicializa AngularFireStorage en el constructor

  obtenerPeliculas(): Observable<any[]> {
    return this.firestore.collection('peliculas', ref => ref.orderBy('fechaEstreno')).valueChanges()
      .pipe(
        map((peliculas: any[]) => {
          return peliculas.map(pelicula => {
            const fechaEstreno = (pelicula.fechaEstreno as Timestamp);
            return { ...pelicula, fechaEstreno };
          });
        })
      );
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
