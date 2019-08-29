## Composant `home`
Comprend la page d'accueil pour les jeux.

## Composant `game`
Affichage des cartes permettant de jouer.

## Exemple d'utilisation de l'interface `Story`
```
import Story from '../../../../shared/interfaces/story';

story: Story[] = [
    {
      _id: '5d6626d8188694e00498f8f8',
      user_id: 0,
      title: 'L\'évasion',
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
```

