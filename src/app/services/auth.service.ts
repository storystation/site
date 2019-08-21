import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RequestService{

  constructor(
    protected http: HttpClient
  ) {
    // super(http);
    super();
  }
}
