import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameChoicesComponent } from './card-game-choices.component';

@NgModule({
  declarations: [CardGameChoicesComponent],
  exports: [CardGameChoicesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ]
})
export class CardGameChoicesModule { }
