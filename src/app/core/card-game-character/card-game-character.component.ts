import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
    const request = this.gameService.saveCharacter({ character_name: this.characterName.value, companion_name: this.companionName.value });
    request.subscribe(response => {
      if (response) {
        console.log('données enregistrées');
      } else {
        console.error('oh oh');
      }
    });
  }

}
