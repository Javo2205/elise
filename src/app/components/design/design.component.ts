import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <section id="design" class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <!-- Image Content -->
          <div class="flex-1 relative order-2 lg:order-1 w-full animate-fade-in-left">
            <div class="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden border-8 border-white group">
                <!-- Inner Design -->
                <div class="aspect-[4/3] relative rounded-[2rem] overflow-hidden bg-slate-800">
                   <img 
                    ngSrc="assets/images/elise-project-plans.webp" 
                    alt="Plano Técnico ELISE"
                    width="600"
                    height="450"
                    priority
                    class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                   >
                   <!-- Technical Grid Overlay (Subtle) -->
                   <div class="absolute inset-0 opacity-10 pointer-events-none" 
                        style="background-image: linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px); background-size: 30px 30px;">
                   </div>
                </div>
            </div>
            
            <!-- Floating Detail -->
            <div class="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
              <div class="flex items-center gap-3">
                 <div class="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white">
                   <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                   </svg>
                 </div>
                 <div>
                   <p class="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{{ i18n.t().design.statusLabel }}</p>
                   <p class="text-slate-900 font-bold">{{ i18n.t().design.status }}</p>
                 </div>
              </div>
            </div>
          </div>

          <!-- Text Content -->
          <div class="flex-1 space-y-8 order-1 lg:order-2">
            <div class="space-y-4">
              <span class="text-amber-700 font-black text-xs uppercase tracking-widest">{{ i18n.t().design.category }}</span>
              <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {{ i18n.t().design.title }}
              </h2>
              <p class="text-lg text-slate-700 leading-relaxed">
                {{ i18n.t().design.description }}
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div class="flex items-start gap-4">
                <div class="text-amber-500 mt-1">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900">{{ i18n.t().design.features[0].title }}</h3>
                  <p class="text-slate-500 text-sm">{{ i18n.t().design.features[0].desc }}</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="text-amber-500 mt-1">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900">{{ i18n.t().design.features[1].title }}</h3>
                  <p class="text-slate-500 text-sm">{{ i18n.t().design.features[1].desc }}</p>
                </div>
              </div>
            </div>
            
            <div class="pt-6">
              <a routerLink="/about" class="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all hover:scale-105 inline-block">
                {{ i18n.t().design.cta }}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-bounce-slow {
      animation: bounce-slow 4s infinite ease-in-out;
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    @keyframes fade-in-left {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-fade-in-left {
      animation: fade-in-left 1s ease-out forwards;
    }
  `]
})
export class DesignComponent {
  i18n = inject(I18nService);
}
