import { createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Login success] login success'
}


export const loginAction = createAction(
  LoginActionTypes.Login
);

export const loginSuccessAction = createAction(
  LoginActionTypes.LoginSuccess
);