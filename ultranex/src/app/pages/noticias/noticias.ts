import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../../sections/footer/footer';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css'
})
export class Noticias {
  // Lista de noticias para que el HTML sea dinámico
  noticias = [
    {
      id: 1,
      categoria: 'OPERACIONES',
      titulo: 'Nueva Ruta Multimodal: Conectando el Oriente con Puertos del Pacífico',
      extracto: 'Optimizamos los tiempos de tránsito en un 20% mediante nuestra nueva alianza estratégica.',
      fecha: '26 ABR 2026',
      img: 'assets/images/noticias/n1.jpg'
    },
    {
      id: 2,
      categoria: 'TECNOLOGÍA',
      titulo: 'Ultranex implementa IA para el Rastreo Predictivo de Carga',
      extracto: 'Nuestra plataforma Ultranex V2 ahora anticipa posibles retrasos climáticos en tiempo real.',
      fecha: '24 ABR 2026',
      img: 'assets/images/noticias/n2.jpg'
    },
    {
      id: 3,
      categoria: 'INDUSTRIA',
      titulo: 'Expansión de Flota: Adquisición de 10 nuevos camiones de alto tonelaje',
      extracto: 'Reforzamos nuestra capacidad de carga pesada para proyectos mineros e industriales.',
      fecha: '20 ABR 2026',
      img: 'assets/images/noticias/n3.jpg'
    }
  ];
}
