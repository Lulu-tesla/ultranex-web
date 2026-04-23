import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Servicio {
  icon: string;
  titulo: string;
  desc: string;
  color: string;
}

interface Oficina {
  ciudad: string;
  tel: string;
  mapsUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  trackingCode = signal('');

  servicios: Servicio[] = [
    {
      icon: 'doc',
      titulo: 'Documentos',
      desc: 'Envío seguro de documentos, contratos, facturas y correspondencia oficial.',
      color: 'blue'
    },
    {
      icon: 'box',
      titulo: 'Paquetes',
      desc: 'Paquetes de todo tamaño con seguimiento en tiempo real desde origen a destino.',
      color: 'red'
    },
    {
      icon: 'caja',
      titulo: 'Cajas',
      desc: 'Gestión especializada de cajas con embalaje profesional incluido.',
      color: 'yellow'
    },
    {
      icon: 'fragil',
      titulo: 'Especiales / Frágil',
      desc: 'Manejo cuidadoso de envíos frágiles, muestras comerciales y materiales especiales.',
      color: 'blue'
    },
    {
      icon: 'corporate',
      titulo: 'Corporativo',
      desc: 'Soluciones personalizadas para PYMES, bancos, aseguradoras y empresas.',
      color: 'red'
    },
    {
      icon: 'embalaje',
      titulo: 'Embalaje',
      desc: 'Servicio completo de paquetería y embalaje para proteger tus envíos.',
      color: 'yellow'
    },
  ];

  tiposServicio = [
    {
      tipo: 'Normal',
      tiempo: '24 horas',
      desc: 'Entrega garantizada al día siguiente. Ideal para envíos regulares a nivel nacional.',
      icon: 'clock',
      color: 'blue',
      badge: 'Económico'
    },
    {
      tipo: 'Expreso',
      tiempo: '4–6 horas',
      desc: 'Desde que recibimos hasta que entregamos. Mismo día, dentro del departamento.',
      icon: 'lightning',
      color: 'red',
      badge: 'Urgente'
    }
  ];

  oficinas: Oficina[] = [
    { ciudad: 'Santa Cruz',  tel: '+591 79047111', mapsUrl: 'https://www.google.com/maps?q=-17.7867234,-63.19033&z=17&hl=es' },
    { ciudad: 'La Paz',      tel: '+591 79047111', mapsUrl: 'https://maps.google.com/?q=La+Paz+Bolivia' },
    { ciudad: 'Cochabamba',  tel: '+591 79047111', mapsUrl: 'https://maps.google.com/?q=Cochabamba+Bolivia' },
    { ciudad: 'Oruro',       tel: '+591 79047111', mapsUrl: 'https://maps.google.com/?q=Oruro+Bolivia' },
    { ciudad: 'Potosí',      tel: '+591 79047111', mapsUrl: 'https://maps.google.com/?q=Potosi+Bolivia' },
  ];

  stats = [
    { valor: '20+',    label: 'Años de experiencia' },
    { valor: '5',      label: 'Ciudades principales' },
    { valor: '24/7',   label: 'Atención continua' },
    { valor: '100%',   label: 'Nacional' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscarTracking(): void {
    const code = this.trackingCode().trim();
    if (code) {
      this.router.navigate(['/rastreo', code]);
    } else {
      this.router.navigate(['/rastreo']);
    }
  }

  onTrackingKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.buscarTracking();
  }
}
