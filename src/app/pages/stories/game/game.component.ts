import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {
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
    const lastUrl = this.activatedRoute.snapshot.url[1];
    if (lastUrl.path === 'create') {
      this.isCharacter = true;
    }
  }
}
