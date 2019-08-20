import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import Menu from '../../../shared/interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  environment = environment;

  isLogged = false;

  menus: Menu[] = [
    {
      name: 'Tarifs',
      url: '/prices',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Écrivains',
      url: '/writers',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Mes histoires',
      url: '/stories',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Déconnexion',
      url: '/logout',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Connexion',
      url: '/login',
      display_when_logged: false,
      display_when_not_logged: true
    },
    {
      name: 'Commencer',
      url: '/register',
      display_when_logged: false,
      display_when_not_logged: true
    }
  ];

  constructor() {}

  ngOnInit() {
    // Set here if the user is logged or not
  }

}
