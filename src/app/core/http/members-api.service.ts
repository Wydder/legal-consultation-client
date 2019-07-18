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
  aMember1: MemberResponse = {
    id: 1,
    email: 'abasdfsdfds@adsasdas',
    firstName: 'basddsasdas',
    lastName: 'basdfsdfdsdasdsasdas',
    phoneNumber: '0456254115',
    district: 'asdasdasddas',
    organisation: 'organisation',
  };
  aMember2: MemberResponse = {
    id: 2,
    email: 'sbasdfsdfds@adsasdas',
    firstName: 'hbasddsasdas',
    lastName: 'basdfsdfdsdasdsasdas',
    district: 'asdasdasddas',
    phoneNumber: '0456254115',
    organisation: 'organisation',
  };
  aMember3: MemberResponse = {
    id: 3,
    email: 'fbasdfsdfds@adsasdas',
    firstName: 'gbasddsasdas',
    lastName: 'basdfsdfdsdasdsasdas',
    phoneNumber: '0456254115',
    district: 'asdasdasddas',
    organisation: 'organisation',
  };
  aMember4: MemberResponse = {
    id: 4,
    email: 'gbasdfsdfds@adsasdas',
    firstName: 'fbasddsasdas',
    phoneNumber: '0456254115',
    lastName: 'basdfsdfdsdasdsasdas',
    district: 'asdasdasddas',
    organisation: 'organisation',
  };
  aMember5: MemberResponse = {
    id: 5,
    email: 'cbasdfsdfds@adsasdas',
    firstName: 'sbasddsasdas',
    phoneNumber: '0456254115',
    lastName: 'basdfsdfdsdasdsasdas',
    district: 'asdasdasddas',
    organisation: 'organisation',
  };
  aMember6: MemberResponse = {
    id: 6,
    email: 'basdfsdfds@adsasdas',
    firstName: 'abasddsasdas',
    phoneNumber: '0456254115',
    lastName: 'basdfsdfdsdasdsasdas',
    district: 'asdasdasddas',
    organisation: 'organisation',
  };

  constructor(private http: HttpClient) { }

  public list(): Observable<MemberResponse[]> {
    const list = [this.aMember1, this.aMember2, this.aMember3, this.aMember4, this.aMember5, this.aMember6]
    return of(list);

    // return this.http.get<MemberResponse[]>(environment.api_url + '/users')
    //   .pipe(
    //     catchError(aError:> observableThrowError(aError))
    //   );
  }
}
