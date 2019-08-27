import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

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
  subject = webSocket(environment.SERVER_WEBSOCKET + '/game');

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

    // this.subject.subscribe(() => this.subject.next('msg to the server'));

    this.subject.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err) // Called if at any point WebSocket API signals some kind of error.
      // () => console.log('Connection closed') // Called when connection is closed (for whatever reason).
    );

    // this.subject.subscribe();
    this.subject.next({ type: 'echo' });
    // this.subject.complete();
    this.subject.error({ code: 4000, reason: 'Broken' });
  }

  logout() {
    localStorage.removeItem('t');
    window.location.reload();
  }
}
