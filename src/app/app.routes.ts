import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ajusta la ruta según tu estructura de carpetas

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
