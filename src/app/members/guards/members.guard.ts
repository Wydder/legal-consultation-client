import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of, Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable({
  providedIn: 'root',
})
export class MembersGuard implements CanActivate {
  constructor(private store: Store<fromStore.MemberState>) { }

  canActivate(): Observable<boolean> {
    return this.hasMembersLoaded().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  hasMembersLoaded(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getMembersLoaded))
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadMembers());
          }
        }),
        filter(loaded => loaded),
        take(1)
      );
  }
}
