import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../../im.type';

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
  props<{ profile: UserProfile; }>()
);

export const resetUserAction = createAction(
  UserActionTypes.resetUser
);
