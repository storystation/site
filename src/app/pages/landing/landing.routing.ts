import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HomeComponent } from '../stories/home/home.component';

export const landingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
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
