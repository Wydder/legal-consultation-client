import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromMembers from './members.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  members: fromMembers.MemberState;
}

export const reducers: ActionReducerMap<CoreState> = {
  members: fromMembers.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { MemberState } from './members.reducer';
