import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-game-choices',
  templateUrl: './card-game-choices.component.html',
  styleUrls: ['./card-game-choices.component.scss']
})
export class CardGameChoicesComponent implements OnInit {

  @Input() jsonTest: any;

  clicks = [
    {
      name: 'Couloir de gauche',
    },
    {
      name: 'Couloir de droite',
    },
    {
      name: 'Couloir du milieu',
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('test :', this.jsonTest);
  }

}
