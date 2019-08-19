import { Routes } from '@angular/router';

import { HomeStoriesComponent } from './home-stories/home-stories.component';

export const storiesRoutes: Routes = [
  {
    path: 'stories',
    component: HomeStoriesComponent
  }
];
