import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-game-module',
  templateUrl: './card-game-module.component.html',
  styleUrls: ['./card-game-module.component.scss']
})
export class CardGameModuleComponent implements OnInit {

  @Input() isColorButtons: boolean;
  @Input() isRadar: boolean;

  isActivated: boolean;

  constructor() {}

  ngOnInit() {
    this.isActivated = false;
    console.log('isColorButtons :', this.isColorButtons);
    console.log('isRadar :', this.isRadar);
  }

    onFinished() {
    console.log('Temps imparti dépassé');
  }

    moduleActivated() {
      this.isActivated = true;
    }

}
