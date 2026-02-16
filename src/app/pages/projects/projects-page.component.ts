import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="pt-32 pb-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
            {{ i18n.t().projects.title }}
          </h1>
          <p class="text-slate-600 max-w-2xl mx-auto text-lg">
            {{ i18n.t().projects.subtitle }}
          </p>
          <div class="mt-8 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of i18n.t().projects.items; track project.id) {
            <div class="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <!-- Image -->
              <div class="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                <img 
                  [ngSrc]="project.img" 
                  [alt]="project.title"
                  width="400"
                  height="300"
                  [priority]="project.id <= 3"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <!-- Content -->
              <div class="p-8">
                <span class="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded">Industrial</span>
                
                <h2 class="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-amber-600 transition-colors">
                  {{ project.title }}
                </h2>
                
                <p class="text-slate-600 text-sm leading-relaxed">
                  {{ project.desc }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectsPageComponent {
  i18n = inject(I18nService);
}
