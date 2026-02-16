import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <section id="projects" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl font-extrabold text-slate-900 tracking-tight">
            {{ i18n.t().projects.title }}
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            {{ i18n.t().projects.subtitle }}
          </p>
          <div class="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (item of i18n.t().projects.items.slice(0, 3); track item.id) {
            <div class="group relative bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 border border-slate-100 flex flex-col h-full transform hover:-translate-y-2">
              
              <!-- Image Area -->
              <div class="aspect-square bg-slate-900 relative overflow-hidden group-hover:bg-slate-800 transition-colors">
                <img 
                  [ngSrc]="item.img" 
                  [alt]="item.title"
                  width="400"
                  height="400"
                  priority
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                >
                <!-- Subtle Grid Overlay for Tech Look -->
                <div class="absolute inset-0 opacity-10 pointer-events-none" 
                     style="background-image: linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px); background-size: 30px 30px;">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent group-hover:from-slate-900/20 transition-all duration-500"></div>
              </div>
              
              <div class="p-8 space-y-4 flex-1 flex flex-col">
                <h3 class="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-slate-700 leading-relaxed flex-1 text-sm">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          }
        </div>

        <!-- View All Button -->
        <div class="mt-20 text-center">
          <a routerLink="/projects" class="inline-flex items-center space-x-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-200">
            <span>{{ i18n.t().projects.viewAll }}</span>
            <svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>
        
      </div>
    </section>
  `
})
export class ProjectsComponent {
  i18n = inject(I18nService);
}
