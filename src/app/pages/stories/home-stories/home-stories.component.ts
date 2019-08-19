import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-stories',
  templateUrl: './home-stories.component.html',
  styleUrls: ['./home-stories.component.sass']
})
export class HomeStoriesComponent implements OnInit {

  totalCurrentStories = 0;
  totalStoriesMonths = 0;
  storiesLeft = 0;
  storiesLimits = true;
  stories: any = [];

  constructor() { }

  ngOnInit() {
  }

}
