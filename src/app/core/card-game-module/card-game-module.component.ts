import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-game-module',
  templateUrl: './card-game-module.component.html',
  styleUrls: ['./card-game-module.component.scss']
})

export class CardGameModuleComponent implements OnInit {

  @Input() moduleContent: any;
  @Input() story: any;

  isActivated: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.moduleContent);
    this.isActivated = false;
  }

  onFinished() {
    console.log('Temps imparti dépassé');
  }

  moduleActivated() {
    console.log('activation du module');
    this.isActivated = true;
  }

}
