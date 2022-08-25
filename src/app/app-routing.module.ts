import { RouterModule, Routes } from '@angular/router';

import { ArticoliComponent } from './pages/articoli/articoli.component';
import { ErrorComponent } from './pages/error/error.component';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { RouteGuardService } from '../services/route-guard.service';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  // Pagina Vuota
  { path: '', component: LoginComponent },
  // Login
  { path: 'login', component: LoginComponent },
  // Registrazione
  { path: 'signup', component: RegistrazioneComponent },
  // Welcome
  {
    path: 'welcome/:userid',
    component: WelcomeComponent,
    canActivate: [RouteGuardService],
  },
  // Articoli
  {
    path: 'articoli',
    component: ArticoliComponent,
    canActivate: [RouteGuardService],
  },
  // Griglia-Articoli
  {
    path: 'articoli/grid',
    component: GridArticoliComponent,
    canActivate: [RouteGuardService],
  },
  // Logout
  { path: 'logout', component: LogoutComponent },
  // Pagina di errore
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
