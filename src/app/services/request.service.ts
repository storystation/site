import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    protected http: HttpClient
  ) {}

  /**
   * Generic GET method request
   *
   * @param path The route to match
   * @param data The data to sent
   */
  protected get(path: string, data: any = {}) {
    return new Observable((observer) => {
      this.http.get(environment.API_PATH + path, data).subscribe(response => {
        observer.next(response);
      });
    });
  }

  /**
   * Generic POST method request
   *
   * @param path The route to match
   * @param data The data to sent
   */
  protected post(path: string, data: any) {
    return new Observable((observer) => {
      this.http.post(environment.API_PATH + path, data).subscribe(response => {
        console.log(response);
        observer.next(response);
      });
    });
  }

  /**
   * Generic PUT method request
   *
   * @param path The route to match
   * @param data The data to sent
   */
  protected put(path: string, data: any) {
    return new Observable((observer) => {
      this.http.put(environment.API_PATH + path, data).subscribe(response => {
        observer.next(response);
      });
    });
  }

  /**
   * Generic DELETE method request
   *
   * @param path The route to match
   */
  protected delete(path: string) {
    return new Observable((observer) => {
      this.http.delete(environment.API_PATH + path).subscribe(response => {
        observer.next(response);
      });
    });
  }
}
