import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card-game-module',
  templateUrl: './card-game-module.component.html',
  styleUrls: ['./card-game-module.component.scss']
})

export class CardGameModuleComponent implements OnInit {

  @Input() moduleContent: any;
  @Input() story: any;

  launchModule: boolean;
  ws: any;

  constructor() {
    this.launchModule = false;
  }

  ngOnInit() {
    this.replaceTextByName();
  }

  onFinished() {
    console.log('Temps imparti dépassé');
  }

  moduleActivated() {
    console.log('activation du module');

    console.log('Ouverture connexion WS');
    this.ws = new WebSocket(environment.SERVER_WEBSOCKET + '/ws/game');

    this.launchModule = true;
  }

  replaceTextByName() {
    const heroName = this.moduleContent.character_name;
    const heroToReplace = '%character_name%';
    const compName = this.moduleContent.companion_name;
    const compToReplace = '%character_companion%';
    let description = this.moduleContent.description;

    this.moduleContent.description = description.replace(heroToReplace, heroName);
    description = description.replace(heroToReplace, heroName);
    this.moduleContent.description = description.replace(compToReplace, compName);
    description = description.replace(compToReplace, compName);

    if (this.moduleContent.answers !== undefined) {
      this.moduleContent.answers.forEach((choice, key) => {
        let message = choice.text;
        this.moduleContent.answers[key].text = message.replace(heroToReplace, heroName);
        message = message.replace(heroToReplace, heroName);
        this.moduleContent.answers[key].text = message.replace(compToReplace, compName);
        message = message.replace(compToReplace, compName);
      });
    }
  }
}
