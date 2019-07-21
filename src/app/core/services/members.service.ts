import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

// services
import { MembersApiService } from '../http/members-api.service';

// models
import { Member, MemberResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private membersApiService: MembersApiService) {
  }

  public list(): Observable<Member[]> {
    return this.membersApiService
    .list()
    .pipe(
        mergeMap(aMember => aMember),
        map((aMember: MemberResponse) => new Member(aMember)),
        toArray()
    );
  }
}
