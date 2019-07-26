import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all modules
import { AuthModule } from './auth/auth.module';
import { LandingModule } from './landing/landing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    LandingModule,
    NotFoundModule,
    StoriesModule
  ]
})

export class PagesModule { }
