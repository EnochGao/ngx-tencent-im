import { createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[toggleIsLogin]',
}

export const loginAction = createAction(
  LoginActionTypes.Login,
  props<{ isLogin: boolean; }>()
);

