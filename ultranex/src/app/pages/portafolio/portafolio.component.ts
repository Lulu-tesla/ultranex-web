import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  stats = [
    { valor: '20+',  label: 'Años en el mercado boliviano' },
    { valor: '5',    label: 'Oficinas departamentales' },
    { valor: '24/7', label: 'Atención ininterrumpida' },
    { valor: '100%', label: 'Cobertura nacional' },
  ];

  clientes = [
    { tipo: 'Entidades Bancarias',  desc: 'Transportamos documentos financieros y valijas bancarias con total seguridad.', icon: 'bank' },
    { tipo: 'Aseguradoras',          desc: 'Gestión de pólizas, contratos y documentos de siniestros a nivel nacional.', icon: 'shield' },
    { tipo: 'PYMES y Empresas',      desc: 'Envíos regulares de mercadería, muestras y documentación corporativa.', icon: 'building' },
    { tipo: 'Personas Particulares', desc: 'Paquetes y encomiendas personales con trato preferencial y seguimiento.', icon: 'person' },
    { tipo: 'Tiendas Online',         desc: 'Soluciones logísticas para e-commerce con pickup y entregas last-mile.', icon: 'cart' },
    { tipo: 'Instituciones Públicas', desc: 'Correspondencia oficial, expedientes y documentos institucionales.', icon: 'institution' },
  ];

  hitos = [
    { año: '2004', evento: 'Fundación de ULTRANEX en Santa Cruz, Bolivia' },
    { año: '2008', evento: 'Apertura de oficinas en La Paz y Cochabamba' },
    { año: '2012', evento: 'Expansión a Oruro y Potosí — Red nacional completa' },
    { año: '2016', evento: 'Implementación del sistema de tracking en línea' },
    { año: '2020', evento: 'Lanzamiento del servicio expreso 4–6 horas' },
    { año: '2024', evento: 'Nueva plataforma digital y rastreo en tiempo real' },
  ];
}
