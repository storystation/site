import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from '../../../../environments/environment';
import Story from '../../../../shared/interfaces/story';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  isColorButtons: boolean;
  isRadar: boolean;
  isModule: boolean;
  isChoices: boolean;
  isCharacter: boolean;
  isFate: boolean;
  moduleDataComponent: any; // The module data for the game component to display

  story: Story[] = [
    {
      _id: '5d6626d8188694e00498f8f8',
      user_id: 0,
      title: 'Title test',
      character_name: 'Toto',
      modules: [
        {
          position: 1,
          name: 'call_choice',
          time_max: 0,
          win_condition: [],
          response: {
            success: '',
            fail: ''
          },
          description: '%character_name% se réveille au milieu de déchets, l\'odeur est épouvantable. Il n\'y aucune lumière naturelle, ' +
            'comme s\'il était dans une décharge mais en sous-sol. La dernière chose dont il se souvient, c\'est un début de soirée avec ' +
            '%character_companion%, son ami d\'enfance, dans un bar miteux. Il vérifie ses poches. Tous ses papiers sont là, sa monnaie, ' +
            'et même son téléphone.',
          _type: '',
          answers: [
            {
              text: 'Appeler %character_companion%',
              destination: 2
            },
            {
              text: 'Appeler sa mère',
              destination: 2
            },
            {
              text: 'Taper le 112',
              destination: 2
            }
          ]
        },
        {
          position: 2,
          name: 'colors_fate',
          time_max: 5,
          win_condition: ['cyan'],
          response: {
            success: '%character_name% sent l\'ascenseur se déplacer vers le haut. Entre l\'odeur résiduelle des déchets et ses ' +
              'vêtements trempés de sueur, même la mort ne viendrait pas le faucher. Une voix suave lui indique : "Vous êtes bien ' +
              'arrivé au 13e étage".',
            fail: 'Suite à son erreur, l\'ascenseur explose et emporte %character_name% dans la tombe.'
          },
          description: 'Rien ne se passe. Est-ce que son téléphone a été traffiqué ? Le logo Samsung apparaît, son téléphone n\'a plus ' +
            'de batterie... Si seulement %character_companion% était à ses côtés. Sur sa gauche, %character_name% aperçoit un ascenseur. ' +
            'En arrivant devant, il appuie sur le bouton, les portes s\'ouvrent. Après s\'être engrouffré à l\'intérieur, au lieu des ' +
            'boutons habituels, %character_name% se retrouve fâce à des boutons de couleur. Il a 10 secondes pour trouver les 2 couleurs ' +
            'primaires qui composent la couleur de la diode.',
          _type: 'colors'
        },
        {
          position: 3,
          name: 'hallway_choice',
          time_max: 0,
          win_condition: [],
          response: {
            success: '',
            fail: ''
          },
          description: 'Les portes s\'ouvrent sur un palier sombre. Un néon fatigué clignote au dessus de sa tête. On se croirait dans ' +
            'un mauvais film d\'horreur. %character_name% se retrouve face à 3 couloirs.',
          _type: '',
          answers: [
            {
              text: 'Couloir de gauche',
              destination: 4
            },
            {
              text: 'Couloir du milieu',
              destination: 4
            },
            {
              text: 'Couloir de droite',
              destination: 4
            }
          ]
        },
        {
          position: 4,
          name: 'distance_fate',
          time_max: 5,
          win_condition: ['5', '10'],
          response: {
            success: 'Après cet enfer, il se relève et se retrouve face à %character_companion%, en sueur. Il comprend que son ami de ' +
              'toujours vient de subir les même épreuves que lui et a survécu.',
            fail: '%character_name% a fait un mauvais mouvement, sa tête se retrouve à 5 mètres du reste de son corps.'
          },
          description: 'Au bout du couloir, il pénètre dans une nouvelle pièce, un mécanisme se déclenche. Il a à peine le temps de se ' +
            'jeter au sol, qu\'une lame lui frôle la nuque. %character_name% sent son rythme cardiaque s\'accélèrer. En soulevant ' +
            'légèrement la tête, il s\'aperçoit que 5 lames balaient la pièce, il va être obligé de ramper. Approche ta main à une ' +
            'distance comprise entre 5 et 10 cm pendant 5 secondes pour pouvoir t\'échapper.',
          _type: 'distance'
        }
      ],
      companion_name: 'Toutou',
      life: 3,
      stage: 1
    }
  ];
  currentStory = this.story[0];

  constructor(private activatedRoute: ActivatedRoute) {
    this.isColorButtons = false;
    this.isRadar = false;
    this.isModule = false;
    this.isChoices = false;
    this.isCharacter = false;
    this.isFate = false;
  }

  ngOnInit() {
    this.setCurrentComponent();
  }

  /**
   * Set the correct component to display helped by the route
   */
  setCurrentComponent() {
    const lastUrl = this.activatedRoute.snapshot.url[1];
    lastUrl.path === 'create' ? this.isCharacter = true : this.setGameComponent();
  }

  replaceTextByName(keyModule: string) {
    const heroName = this.currentStory.character_name;
    const heroToReplace = '%character_name%';
    const compName = this.currentStory.companion_name;
    const compToReplace = '%character_companion%';
    let description = this.currentStory.modules[keyModule].description;

    this.currentStory.modules[keyModule].description = description.replace(heroToReplace, heroName);
    description = description.replace(heroToReplace, heroName);
    this.currentStory.modules[keyModule].description = description.replace(compToReplace, compName);
    description = description.replace(compToReplace, compName);

    if (this.currentStory.modules[keyModule].answers !== undefined) {
      this.currentStory.modules[keyModule].answers.forEach((choice, key) => {
        let message = choice.text;
        this.currentStory.modules[keyModule].answers[key].text = message.replace(heroToReplace, heroName);
        message = message.replace(heroToReplace, heroName);
        this.currentStory.modules[keyModule].answers[key].text = message.replace(compToReplace, compName);
        message = message.replace(compToReplace, compName);
      });
    }
  }

  /**
   * Set the game component to use
   */
  setGameComponent() {
    this.currentStory.modules.forEach((module, key) => { // Define the module to be used in the moduleContent variable
      if (module.position === this.currentStory.stage) {
        this.moduleDataComponent = this.currentStory.modules[key];
        // @ts-ignore
        this.replaceTextByName(key);
      }
    });
    // console.log(this.moduleDataComponent);

    // Checks if there is an answer table, if so, displays the game component with the buttons, otherwise displays another game component
    if (this.moduleDataComponent.answers !== undefined) {
      this.isChoices = true;
    } else {
      console.log('il y a pas de boutons');
    }
  }
}
