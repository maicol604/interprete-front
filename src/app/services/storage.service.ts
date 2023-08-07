import { Injectable } from '@angular/core';

const USER_KEY = 'currentUser';

@Injectable({providedIn: 'root'})
export class StorageService {

  constructor() { }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  setItem( key: string, val: string ) {
    localStorage.setItem( key, val);
  }

  getItem( key: string ) {
    return localStorage.getItem( key);
  }

}
