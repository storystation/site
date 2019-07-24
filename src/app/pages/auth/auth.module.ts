import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports all pages
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule
  ]
})
export class AuthModule { }
