import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'bienvenida', loadComponent:()=> import('./components/bienvenida/bienvenida.component')
    },
    {
        path: 'login', loadComponent:()=> import('./components/login/login.component')
    },
    {
        path: 'altaRepartidor', loadComponent:()=> import('./components/alta-repartidor/alta-repartidor.component')
    },
];
