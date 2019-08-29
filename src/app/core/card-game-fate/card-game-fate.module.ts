import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CardGameFateComponent } from './card-game-fate.component';

@NgModule({
  declarations: [CardGameFateComponent],
  exports: [CardGameFateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CardGameFateModule {}
