import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game-fate',
  templateUrl: './card-game-fate.component.html',
  styleUrls: ['./card-game-fate.component.scss']
})
export class CardGameFateComponent implements OnInit {

  success: boolean;

  constructor() {
    this.success = true;
  }

  ngOnInit() {
  }

}
