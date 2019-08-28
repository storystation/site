import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-stories',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalCurrentStories = 0;
  totalStoriesMonths = 0;
  storiesLeft = 0;
  storiesLimits = true;
  stories: any = [];

  constructor() { }

  ngOnInit() {
    // if (!localStorage.getItem('t')) {
    //   window.location.href = '/login';
    // }
  }

}
