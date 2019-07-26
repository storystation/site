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

  subscribeSpecs = [
    {
      name: 'Gratuite',
      description: [
        {
          name: 'Un compte personnel'
        },
        {
          name: 'Accès à 2 histoires par mois'
        }
      ],
      price: 0
    },
    {
      name: 'Starter',
      description: [
        {
          name: 'Un compte personnel'
        },
        {
          name: 'Accès à 5 histoires par mois'
        },
        {
          name: 'Passage priorisé lors d\'appels d\'aide'
        },
        {
          name: 'Sans publicités'
        }
      ],
      price: 5
    },
    {
      name: 'Premium',
      description: [
        {
          name: 'Un compte personnel'
        },
        {
          name: 'Accès à illimité à toutes les histoires du catalogue'
        },
        {
          name: 'Passage priorisé lors d\'appels d\'aide'
        },
        {
          name: 'Sans publicités'
        }
      ],
      price: 10
    },
    {
      name: 'Famille',
      description: [
        {
          name: 'Jusqu\'à 4 comptes gérés par un compte parent'
        },
        {
          name: 'Accès illimité à toutes les histoires du catalogue'
        },
        {
          name: 'Passage priorisé lors d\'appels d\'aide'
        },
        {
          name: 'Sans publicités'
        }
      ],
      price: 15
    },
  ];
  hardwareSpecs = [];

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
