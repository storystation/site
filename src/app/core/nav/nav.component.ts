import { Component, OnInit } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

import { environment } from '../../../environments/environment';
import Menu from '../../../shared/interfaces/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // environment = environment;
  ws = new $WebSocket(environment.SERVER_WEBSOCKET + '/game');

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

  constructor() {

    this.ws.send(JSON.stringify({ type: 'echo' })).subscribe(
      (msg) => {
        console.log('next', msg.data);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('complete');
        // this.ws.close(false);
      }
    );

    /*this.ws.send(JSON.stringify({ type: 'echo' }), WebSocketSendMode.Promise).then(
      (T) => {
        console.log('is send');
      },
      (T) => {
        console.log('not send');
      }
    );*/

    // this.ws.send({ type: 'echo' });
  }

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
