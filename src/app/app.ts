import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, RouterOutlet],
  template: `
    <div class="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col relative">
      <app-navbar />
      
      <main class="flex-grow min-h-screen">
        <router-outlet />
      </main>

      <app-footer />

      <!-- WhatsApp Floating Button -->
      <a 
        href="https://wa.me/526144880511" 
        target="_blank" 
        rel="noopener noreferrer"
        class="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 group flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.905-11.893 11.905-2.015 0-3.991-.512-5.741-1.488L0 24zm6.121-6.131c1.551.921 3.034 1.426 4.714 1.426 5.385 0 9.771-4.385 9.771-9.769 0-2.607-1.02-5.056-2.871-6.906C16.142 1.02 13.691 0 11.084 0 5.696 0 1.312 4.39 1.312 9.769c0 1.692.485 3.093 1.408 4.606L1.721 21.01l6.457-1.688v-.444-.004zM11.084 1.15c4.75 0 8.618 3.869 8.618 8.618 0 2.305-.898 4.47-2.528 6.101-1.631 1.63-3.796 2.528-6.101 2.528-1.516 0-2.83-.434-4.145-1.214l-.297-.176-3.827 1 1.018-3.714-.194-.308c-.783-1.246-1.197-2.56-1.197-3.921.001-4.75 3.87-8.621 8.619-8.621zM16.645 13.52c-.303-.151-1.794-.885-2.072-.985-.278-.1-.482-.151-.684.151-.202.302-.782.985-.959 1.185-.177.2-.354.226-.658.075-.303-.151-1.281-.472-2.441-1.506-.902-.805-1.511-1.8-1.687-2.102-.177-.302-.019-.465.133-.615.136-.135.303-.352.454-.528.151-.177.202-.302.303-.503.101-.202.051-.377-.025-.528-.076-.151-.684-1.649-.937-2.252-.247-.604-.492-.523-.684-.533-.177-.008-.38-.01-.581-.01-.202 0-.531.075-.81.377-.278.302-1.061 1.031-1.061 2.516 0 1.485 1.086 2.921 1.238 3.122.151.202 2.138 3.265 5.178 4.577.723.312 1.287.498 1.728.638.726.231 1.388.198 1.911.121.583-.087 1.794-.733 2.047-1.441.253-.708.253-1.314.177-1.441-.076-.126-.279-.202-.582-.353z" />
        </svg>
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm ml-0 group-hover:ml-3">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  `,
})
export class App { }
