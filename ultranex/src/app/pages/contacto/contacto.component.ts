import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  enviado  = signal(false);
  loading  = signal(false);

  form = {
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    ciudad_origen: '',
    ciudad_destino: '',
    tipo_envio: '',
    tipo_servicio: '',
    mensaje: ''
  };

  ciudades = ['La Paz','Santa Cruz','Cochabamba','Oruro','Potosí','Sucre','Trinidad','Cobija','Tarija'];

  oficinas = [
    { ciudad: 'Santa Cruz', tel: '+591 79047111', email: 'ultranex@gmail.com', mapsUrl: 'https://www.google.com/maps?q=-17.7867234,-63.19033&z=17&hl=es' },
    { ciudad: 'La Paz',     tel: '+591 79047111', email: 'ultranex@gmail.com', mapsUrl: 'https://maps.google.com/?q=La+Paz+Bolivia' },
    { ciudad: 'Cochabamba', tel: '+591 79047111', email: 'ultranex@gmail.com', mapsUrl: 'https://maps.google.com/?q=Cochabamba+Bolivia' },
    { ciudad: 'Oruro',      tel: '+591 79047111', email: 'ultranex@gmail.com', mapsUrl: 'https://maps.google.com/?q=Oruro+Bolivia' },
    { ciudad: 'Potosí',     tel: '+591 79047111', email: 'ultranex@gmail.com', mapsUrl: 'https://maps.google.com/?q=Potosi+Bolivia' },
  ];

  enviarFormulario(): void {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.enviado.set(true);
    }, 1500);
  }

  resetForm(): void {
    this.enviado.set(false);
    this.form = { nombre:'', empresa:'', telefono:'', email:'', ciudad_origen:'', ciudad_destino:'', tipo_envio:'', tipo_servicio:'', mensaje:'' };
  }
}
