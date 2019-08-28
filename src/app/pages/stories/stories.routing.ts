import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';

export const storiesRoutes: Routes = [
  {
    path: 'stories',
    component: HomeComponent
  },
  {
    path: 'stories/create',
    component: GameComponent
  },
  {
    path: 'stories/game',
    component: GameComponent
  }
];
