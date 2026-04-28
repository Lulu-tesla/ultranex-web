import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Configuración del Router con Scroll por ID
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',        // Habilita el salto a #IDs
        scrollPositionRestoration: 'enabled' // Vuelve arriba al cambiar de página
      })
    ),

    // 2. Otros proveedores globales (fuera de provideRouter)
    // Nota: provideBrowserGlobalErrorListeners no es estándar de Angular core,
    // asegúrate de que tu librería lo soporte o bórralo si te da error.
  ]
};
