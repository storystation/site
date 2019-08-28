import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-home-stories',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalCurrentStories = 0;
  totalStoriesMonths = 0;
  storiesLeft = 1;
  storiesLimits = true;
  stories: any = [];

  constructor(
    private storiesService: StoriesService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('t')) {
      window.location.href = '/login';
    }

    if (localStorage.getItem('story')) {
      localStorage.removeItem('story');
    }

    const stories = this.storiesService.list(localStorage.getItem('t'));
    stories.subscribe(res => {
      if (res) {
        this.stories = res as Array<any>;
        // @ts-ignore
        this.totalCurrentStories = res.length;
      }
    });
  }

  selectStory(story: any) {
    localStorage.setItem('story', JSON.stringify(story));
    window.location.href = '/stories/game';
  }

}
