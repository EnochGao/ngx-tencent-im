
import { Action, createReducer, on } from '@ngrx/store';
import { loginAction, LoginActionTypes } from '../actions';


export interface LoginState {
  user: string;
  isLogin: boolean;
}

export const initialState: LoginState = {
  user: '',
  isLogin: false,
};

const scoreboardReducer = createReducer(
  initialState,
  on(loginAction, state => ({ ...state, isLogin: true }))

);

export function LoginReducer(state: LoginState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}