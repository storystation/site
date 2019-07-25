import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import Menu from '../../../shared/interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  environment = environment;
  showMenu = true;

  menus: Menu[] = [
    {
      name: 'Premier lien',
      icon: '',
      url: '#'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
