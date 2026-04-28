import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos todas las secciones
import { Hero } from '../../sections/hero/hero';
import { Tracking } from '../../sections/tracking/tracking';
import { Nosotros } from '../../sections/nosotros/nosotros';
import { Servicios } from '../../sections/servicios/servicios';
import { ComprasUsa } from '../../sections/compras-usa/compras-usa';
import { ContactoHome } from '../../sections/contacto-home/contacto-home';
import { Footer } from '../../sections/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  // IMPORTANTE: Todos deben estar aquí para que Angular los reconozca en el HTML
  imports: [
    CommonModule,
    Hero,
    Tracking,
    Nosotros,
    Servicios,
    ComprasUsa,
    ContactoHome,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
