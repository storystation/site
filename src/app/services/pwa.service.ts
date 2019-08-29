import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent;
  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar
  ) {
    !this.swUpdate.isEnabled ? console.warn('SW Not enabled') : console.log('SW Enabled');

    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Une mise à jour est disponible', 'Recharger');
      snack.onAction().subscribe(() => {
        window.location.reload();
      });
      snack._dismissAfter(20000);
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
