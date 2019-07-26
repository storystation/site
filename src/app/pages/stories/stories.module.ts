import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoriesModule } from './user-stories/user-stories.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserStoriesModule
  ]
})
export class StoriesModule { }
