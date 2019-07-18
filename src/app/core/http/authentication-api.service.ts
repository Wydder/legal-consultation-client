import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment.local';

import { AuthenticationService } from '../services';

// modules
import { CoreModule } from '../core.module';

// models
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationApiService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.authenticationService.getCurrentUser()));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginForm: User) {
    return this.http.post<any>(`${environment.api_url}/auth/signin`, JSON.stringify(loginForm))
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.authenticationService.setCurrentUser(user);
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  signup(signupForm: User) {
    return this.http.post<any>(`${environment.api_url}/auth/signup`, JSON.stringify(signupForm));
  }

  logout() {
    this.authenticationService.removeCurrentUser();
    this.currentUserSubject.next(null);
  }
}
