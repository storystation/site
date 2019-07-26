import { Routes } from '@angular/router';

import { UserStoriesComponent } from './user-stories/user-stories.component';

export const storiesRoutes: Routes = [
  {
    path: 'stories',
    component: UserStoriesComponent
  }
];
