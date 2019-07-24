import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all modules
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class PagesModule { }
