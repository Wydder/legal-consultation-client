import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

// models
import { Member, MemberResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MembersApiService {
  aMember1: MemberResponse;
  aMember2: MemberResponse;
  aMember3: MemberResponse;
  aMember4: MemberResponse;
  aMember5: MemberResponse;
  aMember6: MemberResponse;

  constructor(private http: HttpClient) { }

  public list(): Observable<MemberResponse[]> {
    this.aMember1.id = 1;
    this.aMember1.email = 'basdfsdfds@adsasdas';
    this.aMember1.firstName = 'basddsasdas';
    this.aMember1.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember1.district = 'asdasdasddas';
    this.aMember1.organisation = 'organisation';

    this.aMember2.id = 2;
    this.aMember2.email = 'basdfsdfds@adsasdas';
    this.aMember2.firstName = 'basddsasdas';
    this.aMember2.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember2.district = 'asdasdasddas';
    this.aMember2.organisation = 'organisation';

    this.aMember3.id = 3;
    this.aMember3.email = 'basdfsdfds@adsasdas';
    this.aMember3.firstName = 'basddsasdas';
    this.aMember3.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember3.district = 'asdasdasddas';
    this.aMember3.organisation = 'organisation';

    this.aMember4.id = 4;
    this.aMember4.email = 'basdfsdfds@adsasdas';
    this.aMember4.firstName = 'basddsasdas';
    this.aMember4.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember4.district = 'asdasdasddas';
    this.aMember4.organisation = 'organisation';

    this.aMember5.id = 5;
    this.aMember5.email = 'basdfsdfds@adsasdas';
    this.aMember5.firstName = 'basddsasdas';
    this.aMember5.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember5.district = 'asdasdasddas';
    this.aMember5.organisation = 'organisation';

    this.aMember6.id = 6;
    this.aMember6.email = 'basdfsdfds@adsasdas';
    this.aMember6.firstName = 'basddsasdas';
    this.aMember6.lastName = 'basdfsdfdsdasdsasdas';
    this.aMember6.district = 'asdasdasddas';
    this.aMember6.organisation = 'organisation';

    const aMember1 = this.aMember1;
    const aMember2 = this.aMember2;
    const aMember3 = this.aMember3;
    const aMember4 = this.aMember4;
    const aMember5 = this.aMember5;
    const aMember6 = this.aMember6;
    return of([aMember1, aMember2, aMember3, aMember4, aMember5, aMember6]);
    
    // return this.http.get<MemberResponse[]>(environment.api_url + '/members')
    //   .pipe(
    //     catchError(aError => observableThrowError(aError))
    //   );
  }
}
