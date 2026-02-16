import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pt-32 pb-20 bg-white overflow-hidden">
      <!-- Hero Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div class="relative">
          <div class="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>
          
          <div class="relative text-center space-y-8 animate-fade-in">
            <span class="inline-block px-4 py-1.5 bg-slate-900 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Trayectoria & Visión</span>
            <h1 class="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
              {{ i18n.t().about.title }}
            </h1>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              {{ i18n.t().about.subtitle }}
            </p>
          </div>
        </div>
      </section>

      <!-- History & Values -->
      <section class="bg-slate-50 py-24 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="space-y-12">
              <div class="space-y-6">
                <h2 class="text-3xl font-bold text-slate-900 flex items-center gap-4">
                  <span class="w-12 h-1 bg-amber-500 rounded-full"></span>
                  {{ i18n.t().about.history.title }}
                </h2>
                <p class="text-slate-600 text-lg leading-relaxed">
                  {{ i18n.t().about.history.content }}
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                @for (val of i18n.t().about.values; track val.title) {
                  <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-amber-500/50 transition-colors group">
                    <div class="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                      <svg class="w-5 h-5 text-amber-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <h3 class="font-bold text-slate-900 mb-2">{{ val.title }}</h3>
                    <p class="text-slate-500 text-sm">{{ val.desc }}</p>
                  </div>
                }
              </div>
            </div>

            <!-- Graphic Element / Design Section -->
            <div class="relative lg:pl-10">
              <div class="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
                 <!-- Tech Drawing Look -->
                 <div class="absolute inset-0 opacity-20" 
                      style="background-image: linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px); background-size: 40px 40px;">
                 </div>
                 
                 <!-- We use a placeholder logic until image is available, but actually we use the technical look as the primary asset -->
                 <div class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6">
                    <div class="w-20 h-20 border-2 border-amber-500 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                      <svg class="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-white text-2xl font-bold mb-2">{{ i18n.t().design.title }}</h4>
                      <p class="text-slate-400 text-sm leading-relaxed">
                        {{ i18n.t().design.description }}
                      </p>
                    </div>
                 </div>
              </div>
              
              <!-- Floating Badge -->
              <div class="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-amber-500 p-4 sm:p-8 rounded-3xl shadow-xl shadow-amber-500/20 max-w-[180px] sm:max-w-[240px] animate-bounce-slow">
                <p class="text-slate-950 font-black text-xl sm:text-3xl mb-1">100%</p>
                <p class="text-slate-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Precisión en Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="relative z-10 space-y-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight">
              ¿Tienes un desafío técnico?
            </h2>
            <p class="text-slate-400 text-lg max-w-2xl mx-auto">
              Estamos listos para diseñar y fabricar la solución que tu empresa necesita.
            </p>
            <div class="pt-4">
              <button (click)="scrollToContact()" class="inline-flex px-10 py-5 bg-amber-500 text-slate-950 font-bold rounded-2xl hover:bg-amber-400 transition-all hover:scale-105">
                Iniciar Proyecto
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .animate-bounce-slow {
      animation: bounce-slow 4s infinite ease-in-out;
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  `]
})
export class AboutPageComponent {
  i18n = inject(I18nService);
  private router = inject(Router);

  scrollToContact() {
    this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }
}
