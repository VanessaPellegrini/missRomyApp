import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

import { NgModule } from '@angular/core';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const redirectLandingToHome = () => redirectLoggedInTo(['landing']);

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./features/landing/landing.module').then((m) => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
/*   {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }