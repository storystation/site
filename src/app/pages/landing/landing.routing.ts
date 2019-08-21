import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const landingRoutes: Routes = [
  {
    path: '',
    redirectTo: '/stories',
    pathMatch: 'full'
  },
  {
    path: 'prices',
    component: LandingComponent
  },
  {
    path: 'writers',
    component: LandingComponent
  }
];
