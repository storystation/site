import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    protected http: HttpClient
  ) {}

  /**
   * Generic GET method request
   * @param path The route to match
   * @param data The data to sent
   */
  protected get(path: string, data: any = {}) {

  }

  /**
   * Generic POST method request
   * @param path The route to match
   * @param data The data to sent
   */
  protected post(path: string, data: any) {

  }

  /**
   * Generic PUT method request
   * @param path The route to match
   * @param data The data to sent
   */
  protected put(path: string, data: any) {

  }

  /**
   * Generic DELETE method request
   * @param path The route to match
   */
  protected delete(path: string) {

  }
}
