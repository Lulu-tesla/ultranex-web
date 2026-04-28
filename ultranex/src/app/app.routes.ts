import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Ultranex | Logística Total en Bolivia'
      },
      {
        path: 'sucursales',
        loadComponent: () => import('./pages/sucursales/sucursales').then(m => m.Sucursales),
        title: 'Sucursales | Ultranex'
      },
      {
        path: 'noticias',
        loadComponent: () => import('./pages/noticias/noticias').then(m => m.Noticias),
        title: 'Noticias y Actualidad | Ultranex'
      },
      {
        path: 'clientes',
        loadComponent: () => import('./pages/clientes/clientes').then(m => m.Clientes),
        title: 'Portal de Clientes | Ultranex'
      },
      {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto),
        title: 'Contacto | Ultranex'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const routerOptions = {
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
};
