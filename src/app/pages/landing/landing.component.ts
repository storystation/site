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
  hardwareSpecs = [
    {
      name: 'Le capteur de distance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus dicta dignissimos dolor doloremque dolores ' +
          'ducimus ea enim harum id in incidunt iste iusto laudantium, nesciunt placeat qui, voluptas! Velit?',
      price: 150
    },
    {
      name: 'Les boutons',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum impedit maxime vitae? Dicta eveniet nam natus ' +
          'nemo repudiandae sit veniam vitae? Corporis harum in libero quos, sapiente unde vel.',
      price: 50
    },
    {
      name: 'Le joystick (pas encore disponible)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aut blanditiis consequuntur, eos maxime ' +
          'nam nemo nobis nulla odio, quisquam soluta. Aspernatur dolores eius laborum, laudantium magnam perferendis.',
      price: 50
    },
    {
      name: 'Le buzzer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consequatur cumque distinctio dolorum ducimus ' +
          'eius, hic id, illo ipsum libero nam natus perferendis quae quisquam ratione sequi ut voluptate!',
      price: 20
    },
  ];

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
