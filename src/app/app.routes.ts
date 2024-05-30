import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'bienvenida', pathMatch: 'full'
      },
    {
        path: 'bienvenida', loadComponent:()=> import('./components/bienvenida/bienvenida.component')
    },
    {
        path: 'login', loadComponent:()=> import('./components/login/login.component')
    },
    {
        path : "listadoRepartidor",
        loadComponent : () => import("./components/listado-repartidor/listado-repartidor.component").then((m) => m.ListadoRepartidorComponent).catch(),
        ...canActivate(()=>redirectUnauthorizedTo(["/login"]))
    },
    {
        path : "altaRepartidor",
        loadComponent : () => import("./components/alta-repartidor/alta-repartidor.component").then((m) => m.AltaRepartidorComponent).catch(),
        ...canActivate(()=>redirectUnauthorizedTo(["/login"]))
    },
];
