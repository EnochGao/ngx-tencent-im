
import { Action, createReducer, on } from '@ngrx/store';
import { UserProfile } from '../../im.type';
import { SDKReadyAction, updateCurrentUserProfileAction } from '../actions';


export interface UserState {
  currentUserProfile: UserProfile,
  isLogin: boolean,
  isSDKReady: boolean, // TIM SDK 是否 ready
  userID: number,
  userSig: string,
  sdkAppID: number,
}

export const initialState: UserState = {
  currentUserProfile: {} as UserProfile,
  isLogin: false,
  isSDKReady: false, // TIM SDK 是否 ready
  userID: 0,
  userSig: '',
  sdkAppID: 0,
};

const _userReducer = createReducer(
  initialState,
  on(SDKReadyAction, (state, { SDKReadyState }) => ({ ...state, isSDKReady: SDKReadyState })),
  on(updateCurrentUserProfileAction, (state, { profile }) => ({ ...state, currentUserProfile: profile as UserProfile })),
);

export function UserReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
