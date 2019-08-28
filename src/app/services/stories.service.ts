import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestService } from './request.service';


@Injectable({
  providedIn: 'root'
})
export class StoriesService extends RequestService {

  protected startPath = '/story';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  list(token: string) {
    return this.get(this.startPath + '/', {headers: {Authorization: `Bearer ${token}`}});
  }

  one(id: string, token: string) {
    return this.get(`${this.startPath}/${id}`);
  }
}
