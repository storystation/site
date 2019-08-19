import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.sass']
})
export class UserStoriesComponent implements OnInit {

  totalCurrentStories = 0;
  totalStoriesMonths = 0;
  storiesLeft = 0;
  storiesLimits = true;
  stories: any = [];

  constructor() { }

  ngOnInit() {
  }

}
