import { createSelector } from '@ngrx/store';

import { Member } from '@app/core/models';
import * as fromFeature from '../reducers';
import * as fromMembers from '../reducers/members.reducer';

export const getMemberState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.members
);

const getMembersEntitiesAsInterfaces = createSelector(getMemberState, fromMembers.getMembersEntities);
export const getMembersEntities = createSelector(
  getMembersEntitiesAsInterfaces,
  (aEntities) => {
    const theMembers = Object.assign({}, aEntities);
    const theResult: { [id: number]: Member } = {};

    Object.keys(theMembers).map((aKey) => {
      theResult[aKey] = new Member(theMembers[aKey]);
    });

    return theResult;
  }
);

export const getAllMembers = createSelector(getMembersEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getMembersLoaded = createSelector(getMemberState, fromMembers.getMembersLoaded);
export const getMembersLoading = createSelector(getMemberState, fromMembers.getMembersLoading);
export const getMemberById = (aMemberId: number) => createSelector(
  getMembersEntities,
  (entities) => entities[aMemberId] || undefined
);
