import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // Demo login state
  isLoggedIn = signal(false);
  email = signal('');
  password = signal('');
  loginError = signal('');

  // Demo data
  envios = [
    { codigo: 'UNX-2024-001234', destino: 'Santa Cruz', estado: 'en_transito', fecha: '15 Ene 2024', tipo: 'Expreso', costo: 85 },
    { codigo: 'UNX-2024-001198', destino: 'Cochabamba', estado: 'entregado',   fecha: '10 Ene 2024', tipo: 'Normal',  costo: 45 },
    { codigo: 'UNX-2024-001150', destino: 'La Paz',     estado: 'entregado',   fecha: '05 Ene 2024', tipo: 'Expreso', costo: 90 },
    { codigo: 'UNX-2024-001089', destino: 'Oruro',      estado: 'entregado',   fecha: '28 Dic 2023', tipo: 'Normal',  costo: 55 },
  ];

  ngOnInit(): void {}

  login(): void {
    if (this.email() && this.password()) {
      this.isLoggedIn.set(true);
      this.loginError.set('');
    } else {
      this.loginError.set('Ingresa tu email y contraseña.');
    }
  }

  logout(): void { this.isLoggedIn.set(false); }

  estadoLabel(e: string): string {
    const m: Record<string,string> = { en_transito:'En tránsito', entregado:'Entregado', recibido:'Recibido', en_proceso:'En proceso', retrasado:'Retrasado' };
    return m[e] ?? e;
  }
}
