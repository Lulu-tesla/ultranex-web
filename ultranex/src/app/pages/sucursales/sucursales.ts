import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Footer } from '../../sections/footer/footer';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css'
})
export class Sucursales {
  private sanitizer = inject(DomSanitizer);

  sucursales = [
    {
      id: 'HQ-TJ01',
      ciudad: 'Tarija',
      tipo: 'Sede Central Administrativa',
      direccion: 'Av. Integración, Zona Industrial',
      telefono: '+591 4 6641234',
      img: 'assets/images/sucursales/tarija-facade.png',
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59124.96637494451!2d-64.7675765!3d-21.5312384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940641154569f109%3A0x8979140c8f5f84d3!2sTarija!5e0!3m2!1ses-419!2sbo!4v1714000000000',
      mapLink: 'https://maps.app.goo.gl/3XmR'
    },
    {
      id: 'HUB-SCZ02',
      ciudad: 'Santa Cruz',
      tipo: 'Hub Logístico Internacional',
      direccion: 'Parque Industrial, 4to Anillo',
      telefono: '+591 3 3345678',
      img: 'assets/images/sucursales/scz-facade.png',
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.814342551403!2d-63.1611029!3d-17.7584102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e84765d70f29%3A0x67399f24300e5720!2sParque%20Industrial%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1ses-419!2sbo!4v1714000000000',
      mapLink: 'https://maps.app.goo.gl/SCZ'
    },
    {
      id: 'OPS-LPZ03',
      ciudad: 'La Paz',
      tipo: 'Centro Operativo El Alto',
      direccion: 'Av. 6 de Marzo, El Alto',
      telefono: '+591 2 2212345',
      img: 'assets/images/sucursales/lpz-facade.png',
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.764121543163!2d-68.1633535!3d-16.5113942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0a4d6bc7a3%3A0x36480b067a99f19!2sEl%20Alto!5e0!3m2!1ses-419!2sbo!4v1714000000000',
      mapLink: 'https://maps.app.goo.gl/LPZ'
    },
    {
      id: 'OPS-CBB04',
      ciudad: 'Cochabamba',
      tipo: 'Nodo de Distribución Regional',
      direccion: 'Av. Circunvalación',
      telefono: '+591 4 4412345',
      img: 'assets/images/sucursales/cbba-facade.png',
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.66312456!2d-66.1568!3d-17.3935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373f13674683f%3A0x9bc2e176378e904d!2sCochabamba!5e0!3m2!1ses-419!2sbo!4v1714000000000',
      mapLink: 'https://maps.app.goo.gl/CBB'
    },
    {
      id: 'OPS-ORU05',
      ciudad: 'Oruro',
      tipo: 'Enlace Comercial Estratégico',
      direccion: 'Carrera a Vinto',
      telefono: '+591 2 5212345',
      img: 'assets/images/sucursales/oruro-facade.png',
      mapaEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.9654124!2d-67.11!3d-17.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e1dee3b5!2sOruro!5e0!3m2!1ses-419!2sbo!4v1714000000000',
      mapLink: 'https://maps.app.goo.gl/ORU'
    }
  ];

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  abrirMapa(url: string): void {
    window.open(url, '_blank');
  }
}
