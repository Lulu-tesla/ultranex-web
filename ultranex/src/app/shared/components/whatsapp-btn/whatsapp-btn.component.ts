import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  template: `
    <a
      href="https://wa.me/59179047111?text=Hola%20ULTRANEX,%20necesito%20información%20sobre%20sus%20servicios"
      class="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.856L0 24l6.335-1.652A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.02-1.37l-.36-.214-3.755.98.999-3.647-.234-.374A9.818 9.818 0 1112 21.818z"/>
      </svg>
      <span class="whatsapp-float__tooltip">¡Escríbenos!</span>
    </a>
  `,
  styles: [`
    .whatsapp-float {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 60px;
      height: 60px;
      background: #25d366;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      box-shadow: 0 4px 20px rgba(37,211,102,0.4);
      transition: all var(--transition-base);
      animation: pulse 2.5s ease-in-out infinite;
    }
    .whatsapp-float:hover {
      background: #1ebe5d;
      transform: scale(1.1);
      color: white;
    }
    .whatsapp-float__tooltip {
      position: absolute;
      right: calc(100% + 12px);
      background: #25d366;
      color: white;
      padding: 6px 14px;
      border-radius: 20px;
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 700;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transform: translateX(10px);
      transition: all var(--transition-base);
    }
    .whatsapp-float:hover .whatsapp-float__tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  `]
})
export class WhatsappBtnComponent {}
