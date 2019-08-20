import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    CountdownModule
  ]
})
export class GameModule { }
