import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnviosService } from '../../core/services/envios.service';
import { Envio, EstadoEnvio } from '../../core/models';

@Component({
  selector: 'app-rastreo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rastreo.component.html',
  styleUrl: './rastreo.component.css'
})
export class RastreoComponent implements OnInit {
  private route  = inject(ActivatedRoute);
  private envios = inject(EnviosService);

  codigoInput = signal('');
  loading     = signal(false);
  error       = signal('');
  envio       = signal<Envio | null>(null);

  // DEMO DATA para mostrar el diseño sin backend
  private demoEnvio: Envio = {
    id: 1,
    codigo_tracking: 'UNX-2024-001234',
    remitente: { nombre: 'Carlos', apellido: 'Mendoza', telefono: '+591 77112233', direccion: 'Av. Busch 123', ciudad: 'La Paz' },
    destinatario: { nombre: 'Ana', apellido: 'García', telefono: '+591 77445566', direccion: 'Calle Sucre 456', ciudad: 'Santa Cruz' },
    origen: 'La Paz',
    destino: 'Santa Cruz',
    descripcion: 'Documentos legales',
    tipo_servicio: 'expreso',
    tipo_envio: 'documento',
    estado: 'en_transito',
    peso_kg: 0.5,
    costo: 85,
    fecha_creacion: '2024-01-15T08:30:00',
    fecha_estimada_entrega: '2024-01-15T14:00:00',
    historial: [
      { id: 1, estado: 'recibido',    descripcion: 'Envío recibido en oficina', ubicacion: 'La Paz - Oficina Central', fecha: '2024-01-15T08:30:00' },
      { id: 2, estado: 'en_proceso',  descripcion: 'Envío en proceso de despacho', ubicacion: 'La Paz - Centro de Distribución', fecha: '2024-01-15T09:15:00' },
      { id: 3, estado: 'en_transito', descripcion: 'En camino hacia destino', ubicacion: 'Ruta La Paz – Santa Cruz', fecha: '2024-01-15T10:00:00' },
    ]
  };

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    if (codigo) {
      this.codigoInput.set(codigo);
      this.buscar();
    }
  }

  buscar(): void {
    const codigo = this.codigoInput().trim();
    if (!codigo) { this.error.set('Ingresa un código de tracking.'); return; }

    this.loading.set(true);
    this.error.set('');
    this.envio.set(null);

    // DEMO: mostrar resultado de demo con cualquier código
    setTimeout(() => {
      this.loading.set(false);
      // En producción: this.envios.rastrear(codigo).subscribe(...)
      if (codigo.length >= 3) {
        this.envio.set({ ...this.demoEnvio, codigo_tracking: codigo });
      } else {
        this.error.set('No se encontró ningún envío con ese código.');
      }
    }, 1200);
  }

  get estadoLabel(): string {
    const map: Record<EstadoEnvio, string> = {
      recibido:    'Recibido',
      en_proceso:  'En proceso',
      en_transito: 'En tránsito',
      en_almacen:  'En almacén',
      en_reparto:  'En reparto',
      entregado:   'Entregado',
      retrasado:   'Retrasado',
      devuelto:    'Devuelto',
      cancelado:   'Cancelado'
    };
    return map[this.envio()?.estado as EstadoEnvio] ?? '';
  }

  get pasos(): { estado: EstadoEnvio; label: string }[] {
    return [
      { estado: 'recibido',    label: 'Recibido' },
      { estado: 'en_proceso',  label: 'En proceso' },
      { estado: 'en_transito', label: 'En tránsito' },
      { estado: 'en_reparto',  label: 'En reparto' },
      { estado: 'entregado',   label: 'Entregado' },
    ];
  }

  pasoActivo(paso: EstadoEnvio): boolean {
    const order: EstadoEnvio[] = ['recibido','en_proceso','en_transito','en_reparto','entregado'];
    const actual = this.envio()?.estado as EstadoEnvio;
    return order.indexOf(actual) >= order.indexOf(paso);
  }

  formatFecha(fecha: string): string {
    return new Date(fecha).toLocaleString('es-BO', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }

  onKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') this.buscar();
  }
}
