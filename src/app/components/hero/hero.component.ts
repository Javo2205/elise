import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 text-white pt-20">
      <!-- Background Effect -->
      <div class="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900/90 pointer-events-none"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
        <!-- Content -->
        <div class="flex-1 space-y-8 animate-fade-in-up">
          <div class="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-bold tracking-widest uppercase">
            <span>Engineering Excellence</span>
            <span class="w-1 h-1 rounded-full bg-amber-500"></span>
            <span>Est. 2024</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {{ i18n.t().hero.title.split(' ')[0] }}
            </span>
            {{ i18n.t().hero.title.split(' ').slice(1).join(' ') }}
          </h1>
          
          <p class="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            {{ i18n.t().hero.subtitle }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a [routerLink]="['/']" fragment="contact" class="inline-flex justify-center items-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              {{ i18n.t().hero.cta }}
              <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a routerLink="/projects" class="inline-flex justify-center items-center px-8 py-4 border border-slate-700 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-800 text-slate-300 font-semibold transition-colors cursor-pointer">
              {{ i18n.t().nav.projects }}
            </a>
          </div>
        </div>
        
        <!-- Visual/Image Area (Industrial Abstract) -->
        <div class="flex-1 w-full relative hidden md:block">
           <div class="relative w-full aspect-square max-w-md mx-auto">
              <!-- Decorative circles -->
              <div class="absolute inset-0 border border-slate-700/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div class="absolute inset-4 border border-dashed border-slate-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <!-- Central Industrial Graphic Placeholder -->
              <div class="absolute inset-0 flex items-center justify-center">
                 <div class="w-64 h-64 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    <img 
                      ngSrc="assets/images/logo-fonts.svg" 
                      alt="ELISE Typography" 
                      width="200" 
                      height="80" 
                      priority
                      class="w-48 h-auto object-contain brightness-0 invert"
                    >
                 </div>
              </div>
              
              <!-- Floating stats card -->
              <div class="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                 <div class="text-amber-500 text-2xl font-bold">100%</div>
                 <div class="text-slate-400 text-xs uppercase tracking-wide">Quality Assured</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .bg-pattern {
      background-image: radial-gradient(#334155 1px, transparent 1px);
      background-size: 32px 32px;
    }
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
  `]
})
export class HeroComponent {
  i18n = inject(I18nService);
}
