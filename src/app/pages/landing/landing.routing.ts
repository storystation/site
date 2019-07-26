import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'features',
    component: LandingComponent
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
