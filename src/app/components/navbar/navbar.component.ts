import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <nav 
      class="fixed w-full z-50 transition-all duration-500 py-4"
      [class.py-0]="isScrolled()"
      [class.py-2]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          class="bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm rounded-2xl px-6 transition-all duration-500"
          [class.rounded-none]="isScrolled()"
          [class.border-transparent]="!isScrolled()"
          [class.shadow-xl]="isScrolled()"
        >
          <div class="flex justify-between h-16 items-center">
            
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center cursor-pointer group" routerLink="/">
              <img 
                ngSrc="assets/images/elise-logo.svg" 
                alt="ELISE Logo" 
                width="120" 
                height="35" 
                priority
                class="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              >
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-1 items-center">
              <a [routerLink]="['/']" fragment="home" class="nav-link relative px-4 py-2 text-slate-500 hover:text-slate-900 font-semibold text-xs uppercase tracking-widest transition-all duration-300">{{ i18n.t().nav.home }}</a>
              <a routerLink="/about" class="nav-link relative px-4 py-2 text-slate-500 hover:text-slate-900 font-semibold text-xs uppercase tracking-widest transition-all duration-300">{{ i18n.t().nav.about }}</a>
              <a routerLink="/projects" class="nav-link relative px-4 py-2 text-slate-500 hover:text-slate-900 font-semibold text-xs uppercase tracking-widest transition-all duration-300">{{ i18n.t().nav.projects }}</a>
              <a [routerLink]="['/']" fragment="contact" class="nav-link relative px-4 py-2 text-slate-500 hover:text-slate-900 font-semibold text-xs uppercase tracking-widest transition-all duration-300">{{ i18n.t().nav.contact }}</a>
              
              <div class="h-6 w-px bg-slate-200 mx-4"></div>
              
              <!-- Language Switcher -->
              <div class="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                <button 
                  (click)="i18n.language.set('es')"
                  [class.bg-white]="i18n.language() === 'es'"
                  [class.text-slate-900]="i18n.language() === 'es'"
                  [class.shadow-sm]="i18n.language() === 'es'"
                  class="px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 text-slate-600 uppercase tracking-widest"
                >
                  ES
                </button>
                <button 
                  (click)="i18n.language.set('en')"
                  [class.bg-white]="i18n.language() === 'en'"
                  [class.text-slate-900]="i18n.language() === 'en'"
                  [class.shadow-sm]="i18n.language() === 'en'"
                  class="px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 text-slate-600 uppercase tracking-widest"
                >
                  EN
                </button>
              </div>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
              <button (click)="toggleMenu()" class="text-slate-900 hover:text-amber-500 focus:outline-none transition-colors">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path *ngIf="!isOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
                  <path *ngIf="isOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        *ngIf="isOpen()" 
        class="md:hidden fixed inset-x-4 top-24 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-100 shadow-2xl p-6 animate-in slide-in-from-top-4 duration-300"
      >
        <div class="space-y-4 flex flex-col items-center">
          <a [routerLink]="['/']" fragment="home" (click)="closeMenu()" class="mobile-link text-xl font-bold text-slate-900 hover:text-amber-500 transition-colors py-2">{{ i18n.t().nav.home }}</a>
          <a routerLink="/about" (click)="closeMenu()" class="mobile-link text-xl font-bold text-slate-900 hover:text-amber-500 transition-colors py-2">{{ i18n.t().nav.about }}</a>
          <a routerLink="/projects" (click)="closeMenu()" class="mobile-link text-xl font-bold text-slate-900 hover:text-amber-500 transition-colors py-2">{{ i18n.t().nav.projects }}</a>
          <a [routerLink]="['/']" fragment="contact" (click)="closeMenu()" class="mobile-link text-xl font-bold text-slate-900 hover:text-amber-500 transition-colors py-2">{{ i18n.t().nav.contact }}</a>
          
          <div class="w-full h-px bg-slate-100 my-4"></div>
          
          <div class="flex space-x-2 bg-slate-50 p-1 rounded-2xl border border-slate-100">
            <button (click)="i18n.language.set('es'); closeMenu()" class="px-6 py-2 rounded-xl text-xs font-bold transition-all" [class.bg-white]="i18n.language() === 'es'" [class.shadow-md]="i18n.language() === 'es'">Español</button>
            <button (click)="i18n.language.set('en'); closeMenu()" class="px-6 py-2 rounded-xl text-xs font-bold transition-all" [class.bg-white]="i18n.language() === 'en'" [class.shadow-md]="i18n.language() === 'en'">English</button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: rgb(245, 158, 11); /* amber-500 */
      transition: all 0.3s ease;
      transform: translateX(-50%);
      opacity: 0;
    }

    .nav-link:hover::after {
      width: 1rem;
      opacity: 1;
    }

    @keyframes fade-in-down {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NavbarComponent {
  i18n = inject(I18nService);
  isOpen = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}

