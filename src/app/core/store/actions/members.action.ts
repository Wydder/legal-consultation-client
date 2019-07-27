import { Action } from '@ngrx/store';
import { Member } from '../../models';

export enum MemberActionTypes {
  LoadMembers = '[Members] Load Members',
  LoadMembersFail = '[Members] Load Members Fail',
  LoadMembersSuccess = '[Members] Load Members Success',
  CreateMember = '[Members] Create Member',
  CreateMemberFail = '[Members] Create Member Fail',
  CreateMemberSuccess = '[Members] Create Member Success',
}

// load members
export class LoadMembers implements Action {
  readonly type: string = MemberActionTypes.LoadMembers;
  constructor(public payload?: any) {}
}

export class LoadMembersFail implements Action {
  readonly type: string = MemberActionTypes.LoadMembersFail;
  constructor(public payload: any) {}
}

export class LoadMembersSuccess implements Action {
  readonly type: string = MemberActionTypes.LoadMembersSuccess;
  constructor(public payload: Member[]) {}
}

// create individual member
export class CreateMember implements Action {
  readonly type: string = MemberActionTypes.CreateMember;
  constructor(public payload: Member) {}
}

export class CreateMemberFail implements Action {
  readonly type: string = MemberActionTypes.CreateMemberFail;
  constructor(public payload: any) {}
}

export class CreateMemberSuccess implements Action {
  readonly type: string = MemberActionTypes.CreateMemberSuccess;
  constructor(public payload: Member) {}
}

// action types
export type MembersAction =
  LoadMembers
  | LoadMembersFail
  | LoadMembersSuccess
  | CreateMember
  | CreateMemberFail
  | CreateMemberSuccess;
