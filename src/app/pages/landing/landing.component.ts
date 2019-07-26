import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  isBeOnTouch = false;

  beOnTouchForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  subscribeSpecs = [
    {
      name: 'Découverte',
      description: [
        { name: 'Un compte personnel' },
        { name: 'Accès à 2 histoires par mois' }
      ],
      price: 0
    },
    {
      name: 'Explorateur',
      description: [
        { name: 'Un compte personnel' },
        { name: 'Accès à 5 histoires par mois' },
        { name: 'Passage priorisé lors d\'appels d\'aide' },
        { name: 'Sans publicités' }
      ],
      price: 5
    },
    {
      name: 'Berzerk',
      description: [
        { name: 'Un compte personnel' },
        { name: 'Accès à illimité à toutes les histoires du catalogue' },
        { name: 'Passage priorisé lors d\'appels d\'aide' },
        { name: 'Sans publicités' }
      ],
      price: 10
    },
    {
      name: 'Dynastie',
      description: [
        { name: 'Jusqu\'à 4 comptes gérés par un compte parent' },
        { name: 'Accès illimité à toutes les histoires du catalogue' },
        { name: 'Passage priorisé lors d\'appels d\'aide' },
        { name: 'Sans publicités' }
      ],
      price: 15
    },
  ];
  hardwareSpecs = [
    {
      name: 'Speech box',
      description: 'L\'élément indispensable pour pouvoir utiliser l\'application, lire, vivre les histoires et greffer ' +
          'des modules dessus pour que votre histoire soit toujours plus immersive.',
      price: 200
    },
    {
      name: 'Sonar',
      description: 'Pouvoir passer des obstacles juste avec vos mouvements, impossible ? Pas avec le sonar. Passez des falaises, faites' +
          ' d\'autres trucs cool aussi.',
      price: 150
    },
    {
      name: 'Boutons',
      description: 'Un bouton standard, sa forme innovante carrée et colorée vous aidera à faire des choix plus ou moins complexes.',
      price: 50
    },
    {
      name: 'Manche (pas encore disponible)',
      description: 'Tirez le manche, secouez le, faites lui faire des vas et viens, vous sentez cette sensation ? Cette sensation ' +
          'd\'avoir évacué toute la frustration de cet ennemi qui vous barrait la route ? Grâce à votre parfaite imitation des mouvements' +
          ' d\'épée, vous avez su surpasser cet obstacle aussi !',
      price: 30
    },
    {
      name: 'Sirène',
      description: 'Vous entendez le son très fin 8 bit de cet instrument ? Vous sentez la nostalgie vous envahir ? C\'est plus fort ' +
          'que vous, vous avez envie d\'aller plus loin avec ce buzzer, comme vous voulez, mais attention à ce qui pourrait arriver.',
      price: 20
    },
  ];

  snapshot: any;

  constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute
  ) {
    this.snapshot = this.activatedRoute.snapshot;
  }

  ngOnInit() {
    this.isHomePage = this.snapshot.url.length === 0;
    this.isWritersPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'writers';
    this.isFeaturesPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'features';
    this.isPricesPage = this.snapshot.url.length > 0 && this.snapshot.url[0].path === 'prices';

    if (this.isWritersPage) {
      this.beOnTouchForm = this.formBuilder.group({
        email: this.email
      });
    }
  }

  beOnTouch() {
    this.isBeOnTouch = true;
  }
}
