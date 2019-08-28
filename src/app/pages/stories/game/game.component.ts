import { Component, OnInit } from '@angular/core';

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
    this.isColorButtons = true;
    this.isRadar = true;
    this.isModule = true;
    this.isChoices = true;
    this.isCharacter = true;
    this.isFate = true;
  }

  ngOnInit() {}
}
