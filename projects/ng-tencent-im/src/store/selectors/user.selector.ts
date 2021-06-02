import { createSelector } from '@ngrx/store';
import { ReducerState } from '../reducer';
import { UserState } from '../reducer/user.reducer';

const selectPlayerStates = (state: ReducerState) => state.user;

export const getSDkReady = createSelector(selectPlayerStates, (state: UserState) => state.isSDKReady);
export const currentUserProfileSelector = createSelector(selectPlayerStates, (state: UserState) => state.currentUserProfile);