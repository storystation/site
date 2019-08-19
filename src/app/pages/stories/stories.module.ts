import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeStoriesComponent } from './home-stories/home-stories.component';

@NgModule({
  declarations: [HomeStoriesComponent],
  imports: [
    CommonModule,
  ]
})
export class StoriesModule { }
