import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  servicios = [
    'Envío de Documentos',
    'Envío de Paquetes',
    'Envío de Cajas',
    'Envíos Especiales / Frágil',
    'Paquetería y Embalaje',
    'Servicio Normal (24hs)',
    'Servicio Expreso (4–6hs)',
  ];

  oficinas = [
    { ciudad: 'Santa Cruz', tel: '+591 79047111' },
    { ciudad: 'La Paz',     tel: '+591 79047111' },
    { ciudad: 'Cochabamba', tel: '+591 79047111' },
    { ciudad: 'Oruro',      tel: '+591 79047111' },
    { ciudad: 'Potosí',     tel: '+591 79047111' },
  ];
}
