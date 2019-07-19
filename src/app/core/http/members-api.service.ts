import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

// models
import { Member, MemberResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MembersApiService {
  constructor(private http: HttpClient) { }

  public list(): Observable<MemberResponse[]> {
    return this.http.get<MemberResponse[]>(environment.api_url + '/users')
      .pipe(
        catchError(aError => observableThrowError(aError))
      );
  }
}
