import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';

// model
import { Member } from '../../models';

// services
import { MembersService } from '../../services';

// actions
import * as memberActions from '../actions/members.action';

@Injectable()
export class MembersEffects {

  @Effect()
  loadMembers$ = this.actions$
    .pipe(
    ofType(memberActions.MemberActionTypes.LoadMembers),
    switchMap(() => {
      return this.storageSpaceService
        .list()
        .pipe(
          map(aMembers => new memberActions.LoadMembersSuccess(aMembers)),
          catchError(error => of(new memberActions.LoadMembersFail(error)))
        )
      })
    );

  @Effect()
  showLoading$ = this.actions$
    .pipe(
      ofType(memberActions.MemberActionTypes.LoadMembers),
      mapTo(new loadingActions.ShowLoading())
    );

  @Effect()
  hideLoading$ = this.actions$
    .pipe(
      ofType(
        memberActions.MemberActionTypes.LoadMembersFail,
        memberActions.MemberActionTypes.LoadMembersSuccess
      ),
      mapTo(new loadingActions.HideLoading())
    );

  constructor(
    private actions$: Actions,
    private storageSpaceService: MembersService
  ) {
  }
}
