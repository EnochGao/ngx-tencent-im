import { createAction, props } from '@ngrx/store';

export interface Profile {
  userID: string;
  avatar: string;
  birthday: number;
  gender: string;
}

export enum UserActionTypes {
  SDKReady = '[user] toggleIsSDKReady',
  updateCurrentUserProfile = '[user] updateCurrentUserProfile'
}

export const SDKReadyAction = createAction(
  UserActionTypes.SDKReady,
  props<{ SDKReadyState: boolean; }>()
);

export const updateCurrentUserProfileAction = createAction(
  UserActionTypes.updateCurrentUserProfile,
  props<{ profile: Profile; }>()
);

