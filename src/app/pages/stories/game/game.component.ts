import { Component, OnInit } from '@angular/core';
// import GameColor from '../../../../shared/interfaces/game-color';

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

  // gameColors: GameColor[] = [];

  constructor() {
    this.isColorButtons = true;
    this.isRadar = false;
    this.isModule = false;
    this.isChoices = true;
  }

  ngOnInit() {
    // this.definesGameColorsAvailable();
  }

  // definesGameColorsAvailable() {
  //   this.gameColors.push({name: 'Red', is_clickable: true});
  //   this.gameColors.push({name: 'Blue', is_clickable: true});
  //   this.gameColors.push({name: 'Yellow', is_clickable: true});
  //   this.gameColors.push({name: 'Green', is_clickable: true});
  // }

  /**
   * Actions to do when the time limit is up.
   */
  // onFinished() {
  //   console.log('Temps imparti dépassé');
  //   this.setRandomResults();
  // }

  /**
   * Defines a random result, calls a specific function according to the module that is used for the current game.
   */
  // setRandomResults() {
  //   console.log('Génération d\'un résultat aléatoire');
  //   if (this.isColorButtons) {
  //     this.clickRandomButton();
  //   } else if (this.isRadar) {
  //     this.setRandomDistanceRadar();
  //   }
  // }

  /**
   * Selects a random button based on all available buttons
   */
  // clickRandomButton() {
  //   const max = this.gameColors.length;
  //   const element = Math.floor(Math.random() * Math.floor(max));
  //   console.log('Le bouton ' + this.gameColors[element].name + ' a été cliqué');
  // }

  // setRandomDistanceRadar() {
  //   console.log('Définition aléatoire d\'une distance pour le jeu avec le radar');
  // }
}
