import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import ChoiceButton from '../../../shared/interfaces/choice-button';

@Component({
  selector: 'app-card-game-choices',
  templateUrl: './card-game-choices.component.html',
  styleUrls: ['./card-game-choices.component.scss']
})
export class CardGameChoicesComponent implements OnInit {

  @Input() moduleContent: any;
  @Input() story: any;
  @Input() characterName: string;

  buttons: ChoiceButton[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.setButtons(this.moduleContent.answers);
  }

  /**
   * Fill the buttons to response
   * @param answers The answers available
   */
  setButtons(answers: any) {
    answers.forEach((element) => {
      this.buttons.push({name: element.text, destination: element.destination});
    });
  }

  /**
   * Call when click on a choice button.
   *
   * @param element The element clicked, can be reached with his id
   */
  clickButton(element) {
    const localStorageJson = JSON.parse(localStorage.getItem('story'));
    localStorageJson.stage = element.destination; // Increment the stage by 1
    localStorage.setItem('story', JSON.stringify(localStorageJson));
    this.redirectTo('/stories/game');
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
