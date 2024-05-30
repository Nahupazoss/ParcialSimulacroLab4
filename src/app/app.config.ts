import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    AngularFireModule,
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
     provideFirebaseApp(() => initializeApp(
      {"projectId":"simulacro2-562d9",
     "appId":"1:712897498789:web:9c0e3a8c22cb573e0c074c",
     "storageBucket":"simulacro2-562d9.appspot.com",
     "apiKey":"AIzaSyChrkbKSg5ivtkqFn6Z3FaA2u-V_0SEzJA",
     "authDomain":"simulacro2-562d9.firebaseapp.com",
     "messagingSenderId":"712897498789",
     "measurementId":"G-0BBZPRB4PW"})), 
     provideAuth(() => getAuth()), 
     provideFirestore(() => getFirestore()), 
     provideStorage(() => getStorage()),]
};
