import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios implements AfterViewInit, OnDestroy {
  @ViewChild('carouselViewport') carousel!: ElementRef;
  private autoPlayTimer: any;

  ngAfterViewInit() {
    this.autoPlayTimer = setInterval(() => this.moveNext(), 5000);
  }

  ngOnDestroy() {
    if (this.autoPlayTimer) clearInterval(this.autoPlayTimer);
  }

  moveNext() {
    const el = this.carousel.nativeElement;
    const step = 360; // Ancho de card + gap
    if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 10) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: step, behavior: 'smooth' });
    }
  }

  movePrev() {
    const el = this.carousel.nativeElement;
    const step = 360;
    if (el.scrollLeft <= 0) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -step, behavior: 'smooth' });
    }
  }
}
