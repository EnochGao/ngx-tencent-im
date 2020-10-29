
import { Action, createReducer, on } from '@ngrx/store';
import { loginAction, LoginActionTypes, loginSuccessAction } from '../actions';


export interface LoginState {
  user: string;
  isLogin: boolean;
}

export const initialState: LoginState = {
  user: '',
  isLogin: false,
};

const _loginReducer = createReducer(
  initialState,
  on(loginAction, state => ({ ...state, isLogin: true }))
);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return _loginReducer(state, action);
}

const _loginSuccessReducer = createReducer(
  initialState,
  on(loginSuccessAction, state => ({ ...state, isLogin: true }))
);

export function LoginSuccessReducer(state: LoginState | undefined, action: Action) {
  return _loginSuccessReducer(state, action);
}