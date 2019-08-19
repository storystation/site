import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingComponent } from './landing.component';
import { CountdownModule } from '../../core/countdown/countdown.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule
  ]
})
export class LandingModule { }
