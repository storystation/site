import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar
  ) {
    !this.swUpdate.isEnabled ? console.warn('SW Not enabled') : console.log('SW Enabled');

    this.swUpdate.available.subscribe(evt => {
      const snack = this.snackbar.open('Mise à jour disponible', 'Reload');
      snack.onAction().subscribe(() => {
        window.location.reload();
      });
      /*snack.setTimeout(() => {
       snack.dismiss();
       }, 6000);*/
    });
  }
}
