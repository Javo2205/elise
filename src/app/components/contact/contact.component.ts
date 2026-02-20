import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { I18nService } from '../../services/i18n.service';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <!-- Contact Info -->
          <div class="space-y-8 animate-fade-in-right">
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
               {{ i18n.t().contact.title }}
            </h2>
            <p class="text-lg text-slate-300 leading-relaxed max-w-sm">
                {{ i18n.t().contact.subtitle }}
            </p>
            
            <div class="space-y-6 pt-8 border-t border-slate-800">
               <!-- Phone -->
               <div class="flex items-start space-x-4 group">
                  <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-white text-lg">{{ i18n.t().contact.phone }}</h3>
                    <a href="tel:6144880511" class="text-slate-300 hover:text-white transition-colors text-lg">614 488 0511</a>
                  </div>
               </div>

               <!-- Email -->
               <div class="flex items-start space-x-4 group">
                  <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-white text-lg">{{ i18n.t().contact.email }}</h3>
                    <a href="mailto:miguelholguin720@gmail.com" class="text-slate-300 hover:text-white transition-colors text-lg break-all">miguelholguin720@gmail.com</a>
                  </div>
               </div>
            </div>

            <a href="https://wa.me/526144880511" target="_blank" class="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] rounded-xl text-white font-bold transition-all shadow-lg hover:shadow-[#25D366]/30 transform hover:-translate-y-1">
               <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
               </svg>
               {{ i18n.t().contact.whatsapp }}
            </a>
          </div>

          <!-- Form -->
          <div class="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl">
            <form class="space-y-6" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              @if (success()) {
                <div class="p-4 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 rounded-lg text-sm font-medium animate-fade-in" role="alert">
                  {{ i18n.t().contact.success }}
                </div>
              }
              
              @if (error()) {
                <div class="p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-sm font-medium animate-fade-in" role="alert">
                  {{ i18n.t().contact.error }}
                </div>
              }

              <div>
                <label class="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">
                  {{ i18n.t().contact.name }}
                </label>
                <input 
                  type="text" 
                  name="name"
                  [(ngModel)]="formData.name"
                  #nameInput="ngModel"
                  required
                  minlength="3"
                  class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  [class.border-red-500]="nameInput.invalid && nameInput.touched"
                  placeholder="John Doe">
              </div>
              
              <div>
                <label class="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">
                  {{ i18n.t().contact.email }}
                </label>
                <input 
                  type="email" 
                  name="email"
                  [(ngModel)]="formData.email"
                  #emailInput="ngModel"
                  required
                  email
                  class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  [class.border-red-500]="emailInput.invalid && emailInput.touched"
                  placeholder="john@company.com">
              </div>
              
              <div>
                <label class="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">
                  {{ i18n.t().contact.message }}
                </label>
                <textarea 
                  name="message"
                  [(ngModel)]="formData.message"
                  #messageInput="ngModel"
                  required
                  minlength="10"
                  rows="4" 
                  class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" 
                  [class.border-red-500]="messageInput.invalid && messageInput.touched"
                  placeholder="Details about my project..."></textarea>
              </div>
              
              <button 
                type="submit"
                [disabled]="submitting() || contactForm.invalid"
                class="w-full py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/20 text-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center">
                @if (!submitting()) {
                  <span>{{ i18n.t().contact.send }}</span>
                } @else {
                  <span class="flex items-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ i18n.t().contact.sending }}
                  </span>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly i18n = inject(I18nService);
  private readonly http = inject(HttpClient);

  // Reemplaza esto con tu ID de Formspree (ejemplo: 'mrgvpkzq')
  private readonly formspreeId = 'xnjbbkng';

  formData: ContactFormData = {
    name: '',
    email: '',
    message: ''
  };

  readonly submitting = signal(false);
  readonly success = signal(false);
  readonly error = signal(false);

  async onSubmit(): Promise<void> {
    if (this.submitting() || !this.formData.email) return;

    this.submitting.set(true);
    this.success.set(false);
    this.error.set(false);

    try {
      await firstValueFrom(
        this.http.post(`https://formspree.io/f/${this.formspreeId}`, this.formData, {
          headers: { 'Accept': 'application/json' }
        })
      );

      this.success.set(true);
      this.resetForm();

      // Auto-quitar mensaje de éxito después de 5 segundos
      setTimeout(() => this.success.set(false), 5000);

    } catch (e) {
      console.error('Form submission error:', e);
      this.error.set(true);

      // Auto-quitar mensaje de error después de 5 segundos
      setTimeout(() => this.error.set(false), 5000);
    } finally {
      this.submitting.set(false);
    }
  }

  private resetForm(): void {
    this.formData = { name: '', email: '', message: '' };
  }
}
