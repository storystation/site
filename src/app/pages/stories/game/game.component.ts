import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  isModule: boolean;
  isChoices: boolean;
  isCharacter: boolean;
  isFate: boolean;
  gameOver: boolean;
  moduleDataComponent: any; // The module data for the game component to display

  currentStory = JSON.parse(localStorage.getItem('story'));

  constructor(private activatedRoute: ActivatedRoute) {
    this.isModule = false;
    this.isChoices = false;
    this.isCharacter = false;
    this.isFate = false;
    this.gameOver = false;
  }

  ngOnInit() {
    console.log(this.currentStory);
    this.setCurrentComponent();
  }

  /**
   * Set the correct component to display helped by the route
   */
  setCurrentComponent() {
    this.activatedRoute.snapshot.url[1].path === 'create' ? this.isCharacter = true : this.setGameComponent();
  }

  /**
   * Replace the default strings %character_name% and %character_companion% by their real name.
   *
   * @param keyModule The correct key to find in modules array
   */
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

    // Checks if there is an answer table, if so, displays the game component with the buttons, otherwise displays another game component
    this.moduleDataComponent._type.length > 0 ? this.isModule = true : this.isChoices = true;
  }
}
