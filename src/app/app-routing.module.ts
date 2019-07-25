import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';

// Import all routes
import { authRoutes } from './pages/auth/auth.routing';
import { landingRoutes } from './pages/landing/landing.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        // Add routes from pages below
        ...authRoutes,
        ...landingRoutes,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
