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

  isLogged = true;

  menus: Menu[] = [
    {
      name: 'Connexion',
      url: '/login',
      display_when_logged: false,
      display_when_not_logged: true
    },
    {
      name: 'Inscription',
      url: '/register',
      display_when_logged: false,
      display_when_not_logged: true
    },
    {
      name: 'Mes histoires',
      url: '/stories',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Tarifs',
      url: '/prices',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Contribution',
      url: '/writers',
      display_when_logged: true,
      display_when_not_logged: false
    },

    {
      name: 'Déconnexion',
      url: '/logout',
      display_when_logged: true,
      display_when_not_logged: false
    }
  ];

  constructor() {}

  ngOnInit() {
    // Set here if the user is logged or not
  }

}
