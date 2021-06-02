
import { Action, createReducer, on } from '@ngrx/store';
import { loginAction, } from '../actions';


export interface LoginState {
  isLogin: boolean;
}

export const initialState: LoginState = {
  isLogin: false,
};

const _loginReducer = createReducer(
  initialState,
  on(loginAction, (state, { isLogin }) => ({ ...state, isLogin }))
);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return _loginReducer(state, action);
}
