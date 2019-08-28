import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CountdownModule } from 'ngx-countdown';
import { CardGameChoicesModule } from '../../../core/card-game-choices/card-game-choices.module';
import { CardGameModuleModule } from '../../../core/card-game-module/card-game-module.module';
import { CardGameCharacterModule } from '../../../core/card-game-character/card-game-character.module';
import { CardGameFateModule } from '../../../core/card-game-fate/card-game-fate.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    CountdownModule,
    CardGameChoicesModule,
    CardGameModuleModule,
    CardGameCharacterModule,
    CardGameFateModule
  ]
})
export class GameModule { }
