import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor() { }

  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }
}
