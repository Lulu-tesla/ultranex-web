import { Component, HostListener, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled  = signal(false);
  menuOpen    = signal(false);
  loginOpen   = signal(false);

  readonly isLoggedIn = computed(() => this.auth.isLoggedIn());
  readonly currentUser = computed(() => this.auth.currentUser());
  readonly isAdmin     = computed(() => this.auth.isAdmin());

  navLinks: NavLink[] = [
    { label: 'Inicio',     path: '/',          icon: 'home' },
    { label: 'Servicios',  path: '/servicios',  icon: 'box' },
    { label: 'Rastreo',    path: '/rastreo',    icon: 'map-pin' },
    { label: 'Portafolio', path: '/portafolio', icon: 'briefcase' },
    { label: 'Contacto',   path: '/contacto',   icon: 'phone' },
  ];

  constructor(public auth: AuthService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  logout(): void {
    this.auth.logout();
    this.menuOpen.set(false);
  }
}
