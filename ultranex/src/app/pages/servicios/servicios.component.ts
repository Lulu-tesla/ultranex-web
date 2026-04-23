import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      icon: 'doc',
      titulo: 'Envío de Documentos',
      desc: 'Contratos, facturas, expedientes y correspondencia oficial. Manejo cuidadoso y entrega certificada.',
      detalle: ['Cartas y correspondencia', 'Contratos y documentos legales', 'Facturas y comprobantes', 'Expedientes administrativos'],
      color: 'blue'
    },
    {
      icon: 'box',
      titulo: 'Envío de Paquetes',
      desc: 'Paquetes de cualquier tamaño con seguimiento en tiempo real desde origen hasta destino.',
      detalle: ['Paquetes pequeños y medianos', 'Seguimiento en tiempo real', 'Confirmación de entrega', 'Cobertura nacional'],
      color: 'red'
    },
    {
      icon: 'caja',
      titulo: 'Envío de Cajas',
      desc: 'Gestión especializada de cajas con embalaje profesional incluido para máxima protección.',
      detalle: ['Cajas de múltiples tamaños', 'Embalaje incluido', 'Protección especial', 'Ideal para e-commerce'],
      color: 'yellow'
    },
    {
      icon: 'fragil',
      titulo: 'Envíos Especiales y Frágil',
      desc: 'Manejo especializado para envíos frágiles, muestras comerciales y materiales delicados.',
      detalle: ['Objetos frágiles y delicados', 'Muestras comerciales', 'Material de laboratorio', 'Arte y coleccionables'],
      color: 'blue'
    },
    {
      icon: 'corporate',
      titulo: 'Servicio Corporativo',
      desc: 'Soluciones personalizadas para empresas, bancos, aseguradoras y PYMES con tarifas especiales.',
      detalle: ['PYMES y empresas', 'Entidades bancarias', 'Aseguradoras', 'Tiendas online'],
      color: 'red'
    },
    {
      icon: 'embalaje',
      titulo: 'Paquetería y Embalaje',
      desc: 'Servicio completo de embalaje profesional para garantizar que tu envío llegue en perfectas condiciones.',
      detalle: ['Embalaje con materiales profesionales', 'Cajas a medida', 'Protección con espuma y relleno', 'Etiquetado y sellado'],
      color: 'yellow'
    }
  ];

  tiempos = [
    { tipo: 'Normal', tiempo: '24 horas', desc: 'Envío estándar con entrega garantizada al siguiente día hábil. Cobertura a nivel nacional.', color: 'blue' },
    { tipo: 'Expreso', tiempo: '4–6 horas', desc: 'Entrega el mismo día dentro del departamento. Desde que lo recibimos hasta que llega a destino.', color: 'red' }
  ];
}
