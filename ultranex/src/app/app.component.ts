import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappBtnComponent } from './shared/components/whatsapp-btn/whatsapp-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappBtnComponent],
  template: `
    <app-navbar />
    <main class="page-content">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-btn />
  `
})
export class AppComponent {}
