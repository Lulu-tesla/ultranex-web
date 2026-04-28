import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tracking.html',
  styleUrl: './tracking.css'
})
export class Tracking {
  // 1. Declaramos las variables que faltan
  guia: string = '';
  loading: boolean = false;
  resultado: any = null;

  // 2. Creamos la función que el botón (click) está buscando
  onTrack() {
    if (!this.guia) return;

    this.loading = true;
    this.resultado = null;

    // Simulamos una búsqueda de 2 segundos
    setTimeout(() => {
      this.loading = false;
      this.resultado = {
        estado: 'En tránsito',
        ubicacion: 'Centro de Distribución - Tarija'
      };
    }, 2000);
  }
}
