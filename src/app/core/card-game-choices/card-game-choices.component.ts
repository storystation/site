import { Component, OnInit, Input } from '@angular/core';

import ChoiceButton from '../../../shared/interfaces/choice-button';

@Component({
  selector: 'app-card-game-choices',
  templateUrl: './card-game-choices.component.html',
  styleUrls: ['./card-game-choices.component.scss']
})
export class CardGameChoicesComponent implements OnInit {

  @Input() moduleContent: any;
  @Input() title: string;

  buttons: ChoiceButton[] = [];

  constructor() {}

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
   * @param elementId The element clicked, can be reached with his id
   */
  clickButton(elementId) {

  }
}
