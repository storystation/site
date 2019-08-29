import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  ws: WebSocket;
  ping: any;
  isComplete: boolean;
  gameOver: boolean;

  constructor(
    private router: Router
  ) {
    this.launchModule = false;
    this.isComplete = false;
    this.gameOver = false;
  }

  ngOnInit() {
    this.replaceTextByName();
  }

  onFinished(result) {
    clearInterval(this.ping);
    this.ws.close();

    this.isComplete = true;
    this.launchModule = false;
    if (result === 'OK') {
      this.gameOver = false;
    } else if (result === 'KO') {
      this.gameOver = true;
    }
  }

  nextStep() {
    if (!this.gameOver) {
      const localStorageJson = JSON.parse(localStorage.getItem('story'));
      localStorageJson.stage++;
      localStorage.setItem('story', JSON.stringify(localStorageJson));
    }
    this.gameOver ? this.redirectTo('/') : this.redirectTo('/stories/game');
  }

  moduleActivated() {
    console.log('Ouverture connexion WS');
    this.ws = new WebSocket(environment.SERVER_WEBSOCKET + '/game');

    this.ws.onmessage = e => {
      const data = JSON.parse(e.data);
      if (data.type === 'end_module' && data.target === 'site') {
        this.onFinished(data.message.status);
      }
    };

    this.ws.onopen = () => {
      this.ping = setInterval(() => { this.ws.send('[ping]'); }, 10000);

      const message = {
        type: 'init_module',
        sender: 'site',
        message: {
          position: this.moduleContent.position,
          time_max: this.moduleContent.time_max,
          win_condition: this.moduleContent.win_condition,
          type: this.moduleContent._type
        }
      };

      console.log('Sending init message.');
      this.ws.send(JSON.stringify(message));
      this.launchModule = true;
    };
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
