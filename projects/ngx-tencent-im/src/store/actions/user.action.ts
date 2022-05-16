import { createAction, props } from '@ngrx/store';
import { Profile } from 'tim-js-sdk';

export enum UserActionTypes {
  SDKReady = '[user] toggleIsSDKReady',
  updateCurrentUserProfile = '[user] updateCurrentUserProfile',
  resetUser = '[user] resetUser',
}

export const SDKReadyAction = createAction(
  UserActionTypes.SDKReady,
  props<{ SDKReadyState: boolean; }>()
);

export const updateCurrentUserProfileAction = createAction(
  UserActionTypes.updateCurrentUserProfile,
  props<{ profile: Profile; }>()
);

export const resetUserAction = createAction(
  UserActionTypes.resetUser
);
