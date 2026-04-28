import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  guia: string = '';

  onTrack() {
    if (this.guia.trim()) {
      console.log('Rastreando:', this.guia);
      alert('Buscando guía: ' + this.guia);
    } else {
      alert('Por favor, ingrese un número de guía válido.');
    }
  }
}
