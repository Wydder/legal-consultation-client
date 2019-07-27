import { Action } from '@ngrx/store';
import { Member } from '../../models';

export enum MemberActionTypes {
  LoadMembers = '[Members] Load Members',
  LoadMembersFail = '[Members] Load Members Fail',
  LoadMembersSuccess = '[Members] Load Members Success',
  CreateMember = '[Members] Create Member Success',
  CreateMemberFail = '[Members] Create Member Success',
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

// create member
export class CreateStorageSpace implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpace;
  constructor(public payload: StorageSpace) {}
}

export class CreateStorageSpaceFail implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpaceFail;
  constructor(public payload: any) {}
}

export class CreateStorageSpaceSuccess implements Action {
  readonly type: string = StorageSpaceActionTypes.CreateStorageSpaceSuccess;
  constructor(public payload: StorageSpace) {}
}

// action types
export type MembersAction =
  LoadMembers
  | LoadMembersFail
  | LoadMembersSuccess;
