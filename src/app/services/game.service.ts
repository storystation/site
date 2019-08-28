import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class GameService extends RequestService {

  protected startPath = '/story/';

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * Post character information
   *
   * @param charData The object needs to be : {"characterName": "string", "companionName": "string"}
   */
  saveCharacter(charData) {
    return this.post(this.startPath + 'new_name', charData);
  }
}
