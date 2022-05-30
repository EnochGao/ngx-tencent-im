import { Action } from '@ngrx/store';
export interface LoginState {
    isLogin: boolean;
}
export declare const initialState: LoginState;
export declare function LoginReducer(state: LoginState | undefined, action: Action): LoginState;
