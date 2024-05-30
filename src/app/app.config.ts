import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import * as firebase from 'firebase/firestore';
import 'firebase/firestore';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: {
      apiKey: "AIzaSyChrkbKSg5ivtkqFn6Z3FaA2u-V_0SEzJA",
      authDomain: "simulacro2-562d9.firebaseapp.com",
      projectId: "simulacro2-562d9",
      storageBucket: "simulacro2-562d9.appspot.com",
      messagingSenderId: "712897498789",
      appId: "1:712897498789:web:19e338d75a3b74d80c074c",
      measurementId: "G-RMWG6ZY0MQ"
    }},
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyChrkbKSg5ivtkqFn6Z3FaA2u-V_0SEzJA",
      authDomain: "simulacro2-562d9.firebaseapp.com",
      projectId: "simulacro2-562d9",
      storageBucket: "simulacro2-562d9.appspot.com",
      messagingSenderId: "712897498789",
      appId: "1:712897498789:web:19e338d75a3b74d80c074c",
      measurementId: "G-RMWG6ZY0MQ"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ]

};
