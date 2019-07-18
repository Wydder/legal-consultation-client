import { Action } from '@ngrx/store';
import { Member } from '../../models';

export enum MemberActionTypes {
  LoadMembers = '[Storage Spaces] Load Members',
  LoadMembersFail = '[Storage Spaces] Load Members Fail',
  LoadMembersSuccess = '[Storage Spaces] Load Members Success',
}

// load members
export class LoadMembers implements Action {
  readonly type: string = MemberActionTypes.LoadMembers;
  constructor(public payload?: any) {}
}

export class LoadMembersFail implements Action {
  readonly type = MemberActionTypes.LoadMembersFail;
  constructor(public payload: any) {}
}

export class LoadMembersSuccess implements Action {
  readonly type: string = MemberActionTypes.LoadMembersSuccess;
  constructor(public payload: Member[]) {}
}

// action types
export type MembersAction =
  LoadMembers
  | LoadMembersFail
  | LoadMembersSuccess;