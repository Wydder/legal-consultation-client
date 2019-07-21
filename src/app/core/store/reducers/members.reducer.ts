import { IMember, Member } from '@app/core/models';
import * as fromMembers from '@app/core/store/actions/members.action';

export interface MemberState {
  entities: { [id: number]: IMember };
  loaded: boolean;
  loading: boolean;
}

export const initialState: MemberState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromMembers.MembersAction
): MemberState {

  switch (action.type) {
    case fromMembers.MemberActionTypes.LoadMembers: {
      return {
        ...state,
        loading: true,
      } as MemberState;
    }

    case fromMembers.MemberActionTypes.LoadMembersSuccess: {
      const theMembers = action.payload;
      const entities = theMembers.reduce((aEntities: { [id: number]: Member }, aMember: Member) => {
        return {
          ...aEntities,
          [aMember.id]: aMember.toJson(),
        };
      }, {
          ...state.entities,
        });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromMembers.MemberActionTypes.LoadMembersFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as MemberState;
    }

    default: {
      return {
        ...state,
      } as MemberState;
    }
  }
}

export const getMembersEntities = (state: MemberState) => state.entities;
export const getMembersLoading = (state: MemberState) => state.loading;
export const getMembersLoaded = (state: MemberState) => state.loaded;
