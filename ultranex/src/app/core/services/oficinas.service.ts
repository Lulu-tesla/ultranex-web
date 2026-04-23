import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Oficina } from '../models';

@Injectable({ providedIn: 'root' })
export class OficinasService {

  private oficinas: Oficina[] = [
    {
      id: 1,
      ciudad: 'Santa Cruz',
      departamento: 'Santa Cruz',
      direccion: 'Av. Principal, Santa Cruz de la Sierra',
      telefono: '+591 79047111',
      email: 'ultranex@gmail.com',
      latitud: -17.7867234,
      longitud: -63.19033,
      horario: 'Lun–Vie 8:00–20:00 | Sáb 8:00–14:00',
      activa: true
    },
    {
      id: 2,
      ciudad: 'La Paz',
      departamento: 'La Paz',
      direccion: 'Centro Comercial, La Paz',
      telefono: '+591 79047111',
      email: 'ultranex@gmail.com',
      latitud: -16.5,
      longitud: -68.15,
      horario: 'Lun–Vie 8:00–20:00 | Sáb 8:00–14:00',
      activa: true
    },
    {
      id: 3,
      ciudad: 'Cochabamba',
      departamento: 'Cochabamba',
      direccion: 'Zona Central, Cochabamba',
      telefono: '+591 79047111',
      email: 'ultranex@gmail.com',
      latitud: -17.3895,
      longitud: -66.1568,
      horario: 'Lun–Vie 8:00–20:00 | Sáb 8:00–14:00',
      activa: true
    },
    {
      id: 4,
      ciudad: 'Oruro',
      departamento: 'Oruro',
      direccion: 'Av. 6 de Octubre, Oruro',
      telefono: '+591 79047111',
      email: 'ultranex@gmail.com',
      latitud: -17.9667,
      longitud: -67.1,
      horario: 'Lun–Vie 8:00–18:00 | Sáb 8:00–12:00',
      activa: true
    },
    {
      id: 5,
      ciudad: 'Potosí',
      departamento: 'Potosí',
      direccion: 'Plaza 10 de Noviembre, Potosí',
      telefono: '+591 79047111',
      email: 'ultranex@gmail.com',
      latitud: -19.5836,
      longitud: -65.7531,
      horario: 'Lun–Vie 8:00–18:00 | Sáb 8:00–12:00',
      activa: true
    }
  ];

  getAll(): Observable<Oficina[]> {
    return of(this.oficinas);
  }

  getById(id: number): Observable<Oficina | undefined> {
    return of(this.oficinas.find(o => o.id === id));
  }
}
