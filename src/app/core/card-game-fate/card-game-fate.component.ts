import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-game-fate',
  templateUrl: './card-game-fate.component.html',
  styleUrls: ['./card-game-fate.component.scss']
})
export class CardGameFateComponent implements OnInit {

  @Input() moduleContent: any;
  @Input() story: any;
  @Input() gameOver: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  nextStep() {
    this.gameOver ? this.redirectTo('/') : this.redirectTo('/stories/game');
  }

  /**
   * Redirect to an url, can reload a component
   *
   * @param url The url to redirect
   */
  redirectTo(url: string) {
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]).then(r => r);
    });
  }
}
