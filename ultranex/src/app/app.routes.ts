import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent)
  },
  {
    path: 'portafolio',
    loadComponent: () =>
      import('./pages/portafolio/portafolio.component').then(m => m.PortafolioComponent)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: 'rastreo',
    loadComponent: () =>
      import('./pages/rastreo/rastreo.component').then(m => m.RastreoComponent)
  },
  {
    path: 'rastreo/:codigo',
    loadComponent: () =>
      import('./pages/rastreo/rastreo.component').then(m => m.RastreoComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'transportista',
    loadComponent: () =>
      import('./pages/transportista/transportista.component').then(m => m.TransportistaComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
