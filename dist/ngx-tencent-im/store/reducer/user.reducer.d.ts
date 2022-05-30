import { Action } from '@ngrx/store';
import { Profile } from 'tim-js-sdk';
export interface UserState {
    currentUserProfile: Profile;
    isLogin: boolean;
    isSDKReady: boolean;
    userID: number;
    userSig: string;
    sdkAppID: number;
}
export declare const initialState: UserState;
export declare function UserReducer(state: UserState | undefined, action: Action): UserState;
