import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameFateComponent } from './card-game-fate.component';


@NgModule({
  declarations: [CardGameFateComponent],
  exports: [CardGameFateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule
  ]
})
export class CardGameFateModule { }
