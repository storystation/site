import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  isColorButtons: boolean;
  isRadar: boolean;
  isModule: boolean;
  isChoices: boolean;
  isCharacter: boolean;
  isFate: boolean;

  constructor() {
    this.isColorButtons = false;
    this.isRadar = false;
    this.isModule = false;
    this.isChoices = false;
    this.isCharacter = false;
    this.isFate = false;
  }

  ngOnInit() {
    this.setCurrentComponent();
  }

  /**
   * Set the correct component to display helped by the route
   */
  setCurrentComponent() {

  }
}
