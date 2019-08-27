import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RequestService {

  protected startPath = '/auth/';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  /**
   * Log an user with his credentials
   *
   * @param credentials The object needs to be : {"login": "string", "password": "string"}
   */
  login(credentials) {
    return this.post(this.startPath + 'logon', credentials);
  }

  /**
   * Create a new user
   *
   * @param credentials The object need to be : {"username": "string", "email": "string", "password": "string"}
   */
  register(credentials) {
    return this.post(this.startPath + 'register', credentials);
  }

  logout() {}
}
