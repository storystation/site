import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  isHomePage = false;
  isWritersPage = false;
  isFeaturesPage = false;
  isPricesPage = false;

  snapshot: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.snapshot = this.activatedRoute.snapshot;
  }

  ngOnInit() {
    this.isHomePage = this.snapshot.url.length === 0;
    this.isWritersPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'writers';
    this.isFeaturesPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'features';
    this.isPricesPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'prices';
  }
}
