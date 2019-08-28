import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends RequestService {

  protected startPath = '/story/';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  /**
   * Post character informations
   *
   * @param character_info The object needs to be : {"characterName": "string", "companionName": "string"}
   */
  saveCharacter(character_info) {
    console.log('test back character :', character_info);
    return this.post(this.startPath + 'new_name', character_info);
  }


  logout() {}
}