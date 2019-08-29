import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private storiesService: StoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('t')) {
      this.redirectTo('/login');
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
    // this.redirectTo('/stories/game');
  }

  /**
   * Redirect to an url, can reload a component
   *
   * @param url The url to redirect
   */
  redirectTo(url: string) {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]).then(r => r);
    });
  }
}
