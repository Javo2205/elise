import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects-page.component').then(m => m.ProjectsPageComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about-page.component').then(m => m.AboutPageComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
