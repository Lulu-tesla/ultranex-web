import { Component } from '@angular/core';

@Component({
  selector: 'page-clientes',
  standalone: true,
  template: `
    <div class="container" style="padding: 150px 0;">
      <h1 class="section-title">Portal de Clientes</h1>
      <div class="login-card">
        <h3>Ingresa a tu cuenta Corporativa</h3>
        <input type="text" placeholder="Usuario / Código de Cliente">
        <input type="password" placeholder="Contraseña">
        <button class="btn-primary" style="width: 100%;">ENTRAR</button>
      </div>
    </div>
  `,
  styles: [`
    .login-card {
      max-width: 400px; margin: 0 auto; background: var(--glass);
      padding: 40px; border-radius: 20px; border: 1px solid #1C05B3;
    }
    input { width: 100%; padding: 12px; margin: 10px 0; background: #000; border: 1px solid #333; color: white; }
  `]
})
export class Clientes {}
