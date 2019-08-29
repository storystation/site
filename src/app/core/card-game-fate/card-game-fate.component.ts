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

  gameOver: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    // private routeReuseStrategy: RouteReuseStrategy
  ) {
    this.gameOver = false;
  }

  ngOnInit() {
    console.log(this.moduleContent);
  }

  nextStep() {
    if (this.gameOver) {
      this.router.navigate(['/']).then(r => console.log(r));
    } else {
      this.redirectTo('/stories/game');
    }
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('/CardGameComponent', { skipLocationChange: true }).then(
      () => {
        this.router.navigate([url]).then(r => r);
      }
    );
  }

}
