import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface TrackingStatus {
  codigo: string;
  estado: string;
  ubicacion: string;
  fecha: string;
}

@Injectable({ providedIn: 'root' })
export class TrackingService {
  private mockData: Record<string, TrackingStatus> = {
    'ULX123': { codigo: 'ULX123', estado: 'En Tránsito', ubicacion: 'Santa Cruz, BO', fecha: '25/04/2026' },
    'ULX456': { codigo: 'ULX456', estado: 'Entregado', ubicacion: 'La Paz, BO', fecha: '24/04/2026' }
  };

  buscarPaquete(guia: string): Observable<TrackingStatus | null> {
    const resultado = this.mockData[guia] || null;
    return of(resultado).pipe(delay(1000)); // Simulación de carga
  }
}
