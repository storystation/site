import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    GameModule
  ]
})
export class StoriesModule { }
