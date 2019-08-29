import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-card-game-character',
  templateUrl: './card-game-character.component.html',
  styleUrls: ['./card-game-character.component.scss']
})

export class CardGameCharacterComponent implements OnInit {
  characterForm: FormGroup;
  characterName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  companionName = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.characterForm = this.formBuilder.group({
      characterName: this.characterName,
      companionName: this.companionName
    });
  }

  get f() {
    return this.characterForm.controls;
  }

  onSubmit() {
    localStorage.setItem('character', this.characterName.value);
    localStorage.setItem('companion', this.companionName.value);

    let story = localStorage.getItem('story');
    story = story.replace(new RegExp(/%character_name%/, 'g'), this.characterName.value);
    story = story.replace(new RegExp(/%character_companion%/, 'g'), this.companionName.value);

    localStorage.setItem('story', story);
    this.redirectTo('/stories/game');
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
