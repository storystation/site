import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameModuleComponent } from './card-game-module.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [CardGameModuleComponent],
  exports: [CardGameModuleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    CountdownModule
  ]
})
export class CardGameModuleModule { }
