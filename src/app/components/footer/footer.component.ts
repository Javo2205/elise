import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              ngSrc="assets/images/elise-logo.svg" 
              alt="ELISE Logo" 
              width="100" 
              height="30" 
              class="h-8 w-auto object-contain brightness-0 invert opacity-80 mb-4"
            >
            <span class="text-xs uppercase tracking-widest text-slate-400">Industrial Engineering & Design</span>
        </div>

        <div class="text-sm font-medium">
          &copy; {{ year }} ELISE. {{ i18n.t().footer.rights }}
        </div>
        
      </div>
    </footer>
  `
})
export class FooterComponent {
  i18n = inject(I18nService);
  year = new Date().getFullYear();
}
