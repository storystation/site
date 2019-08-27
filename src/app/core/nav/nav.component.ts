import { Component, OnInit } from '@angular/core';

// import { environment } from '../../../environments/environment';
import Menu from '../../../shared/interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogged = false;

  menus: Menu[] = [
    {
      name: 'Connexion',
      url: '/login',
      slug: 'login',
      display_when_logged: false,
      display_when_not_logged: true
    },
    {
      name: 'Inscription',
      url: '/register',
      slug: 'register',
      display_when_logged: false,
      display_when_not_logged: true
    },
    {
      name: 'Mes histoires',
      url: '/stories',
      slug: 'stories',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Tarifs',
      url: '/prices',
      slug: 'prices',
      display_when_logged: true,
      display_when_not_logged: false
    },
    {
      name: 'Contribution',
      url: '/writers',
      slug: 'writers',
      display_when_logged: true,
      display_when_not_logged: false
    },

    {
      name: 'Déconnexion',
      url: '/logout',
      slug: 'logout',
      display_when_logged: true,
      display_when_not_logged: false,
    }
  ];

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('t')) {
      this.isLogged = true;
    }
  }

  logout() {
    localStorage.removeItem('t');
    window.location.reload();
  }
}
