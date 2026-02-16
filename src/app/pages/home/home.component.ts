import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { DesignComponent } from '../../components/design/design.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, DesignComponent, ProjectsComponent, ContactComponent],
  template: `
    <app-hero />
    
    @defer (on viewport) {
      <app-design />
    } @placeholder (minimum 500ms) {
      <div class="h-[600px] w-full bg-slate-50 animate-pulse flex items-center justify-center text-slate-300">Loading Design...</div>
    }

    @defer (on viewport) {
      <app-projects />
    } @placeholder (minimum 500ms) {
      <div class="h-[800px] w-full flex items-center justify-center bg-slate-50 text-slate-400 animate-pulse">
         <span class="sr-only">Loading Projects...</span>
         <svg class="h-10 w-10 text-slate-300 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      </div>
    }

    @defer (on viewport) {
      <app-contact />
    } @placeholder (minimum 500ms) {
       <div class="h-[600px] w-full flex items-center justify-center bg-slate-900 text-slate-600 animate-pulse">
         <span class="sr-only">Loading Contact...</span>
          <svg class="h-10 w-10 text-slate-700 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
       </div>
    }
  `,
})
export class HomeComponent { }
